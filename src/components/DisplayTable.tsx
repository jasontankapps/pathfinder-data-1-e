import {
	AnchorHTMLAttributes,
	ClassAttributes,
	Dispatch,
	FC,
	PropsWithChildren,
	useCallback,
	useEffect,
	useMemo,
	useState
} from 'react';
import {
	IonButton,
	IonButtons,
	IonContent,
	IonFooter,
	IonHeader,
	IonIcon,
	IonItem,
	IonItemDivider,
	IonLabel,
	IonList,
	IonModal,
	IonPicker,
	IonPickerColumn,
	IonPickerColumnOption,
	IonRippleEffect,
	IonText,
	IonTitle,
	IonToggle,
	IonToolbar,
	useIonAlert,
	useIonToast
} from '@ionic/react';
import {
	caretDown,
	caretUp,
	close,
	closeCircle,
	ellipse,
	filter as filterIcon,
	repeat
} from 'ionicons/icons';
import Markdown, { ExtraProps } from 'react-markdown';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { useLocation } from 'wouter';
import { Datum, Filter, RawDatum, Table, TableColumnInfoTypes } from '../types';
import Link from './Link';
import convertLinks, { checkForEncodedLink } from './convertLinks';
import InnerLink from './InnerLink';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { goTo } from '../store/historySlice';
import { SortObject, TableObject, setTableActive, setTableFilter, updateTableFilterRows } from '../store/displayTableSlice';
import ScrollContainer from './ScrollContainer';

type TriggerSortFunc = (index: number, useNormalSort: boolean, activeRows?: number[] | null, save?: boolean) => void;

interface ThProps {
	index: number
	sorter: TriggerSortFunc
	sortState?: boolean
	active: boolean
	children: string
	sortable: boolean
	size?: number
}

interface TdRouterLinkProps {
	datum: Datum
	align?: (boolean | null)
}

interface TdProps extends TdRouterLinkProps {
	type: TableColumnInfoTypes
}

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;

const a = (props: MDaProps) => {
	const { href = "", children, id, "aria-label": ariaLabel } = props;
	if (href.match(/^http/)) {
		return <a href={href} id={id} aria-label={ariaLabel}>{children}</a>
	} else if(href.match(/^\//)) {
		// Initial slash indicates this needs a ripple.
		return <Link to={href} id={id} aria-label={ariaLabel}>{children}<IonRippleEffect /></Link>
	} else if (href.match(/^#/)) {
		// Hash indicates internal link
		return <InnerLink aria-label={ariaLabel} id={id} to={href}>{children}</InnerLink>
	}
	return <Link to={"/" + href} id={id} aria-label={ariaLabel}>{children}</Link>
};
const components = { a };

const translateGp = (gp: number, adjustment: boolean = false): string => {
	if(gp !== gp) {
		// NaN;
		return `[NaN]`;
	}
	const sign = adjustment && gp >= 0 ? "+" : "";
	if(Math.floor(gp) === gp) {
		return `${sign}${gp.toLocaleString()} gp`;
	}
	const sp = gp * 10;
	if(Math.floor(sp) === sp) {
		return `${sign}${sp} sp`;
	}
	return `${sign}${sp * 10} cp`;
};

const FINAL_CHAR = String.fromCodePoint(0x10FFFF);
function getCheckableValue (item: RawDatum, nullish: string, fromArray: boolean = false): ({string?: string, number?: number}) {
	if(item === null || item === "~~") {
		return {string: nullish};
	} else if (Array.isArray(item)) {
		return getCheckableValue(item[0], nullish, true);
	} else if (typeof(item) === "number") {
		return {number: item};
	} else if (fromArray) {
		return {string: item.replace(/^[-a-z]+\//g, "") + " "};
	}
	const m = checkForEncodedLink(item);
	return m ?
		{string: m[5] + " "}
		: {string: item + " "};
};
const normalSort = (a: RawDatum, b: RawDatum) => {
	// a, b, c...
	const {string: xs, number: xn} = getCheckableValue(a, FINAL_CHAR);
	const {string: ys, number: yn} = getCheckableValue(b, FINAL_CHAR);
	if(xs && ys) {
		return xs.localeCompare(ys, 'en');
	} else if (xn && yn) {
		return xn > yn ? 1 : (xn < yn ? -1 : 0);
	}
	const x: string = xs || String(xn);
	const y: string = ys || String(yn);
	return x.localeCompare(y, 'en', { numeric: true });
};
const reverseSort = (a: RawDatum, b: RawDatum) => {
	// z, y, x...
	return 0 - normalSort(a, b);
};

const DirectionIcon: FC<{down:boolean}> = ({down}) => {
	return <IonIcon className="sortArrow" icon={down ? caretDown : caretUp} />;
};

const getStyle = (size: number | undefined) => {
	if(size === undefined) {
		return undefined;
	}
	return { width: `${size + 1}rem` };
}

const Th: FC<ThProps> = ({index, sorter, sortState = true, children, active, sortable, size}) => {
	const [ useNormalSort, setUseNormalSort ] = useState(sortState);
	useEffect(() => setUseNormalSort(sortState), [sortState]);
	const onClick = useCallback(() => {
		const newDescending = active ? !useNormalSort : true;
		sorter(index, newDescending);
		setUseNormalSort(newDescending);
	}, [index, sorter, useNormalSort, active]);
	const markdown = useMemo(() => convertLinks([children]), [children]);
	if(sortable) {
		return (
			<th className="ion-activatable sortable" onClick={onClick} style={getStyle(size)}>
				<div>
					<IonRippleEffect />
					<Markdown components={components}>{markdown}</Markdown>
					{active ? <DirectionIcon down={useNormalSort} /> : <IonIcon className="sortNil" icon={ellipse} />}
				</div>
			</th>
		);
	}
	return (
		<th style={getStyle(size)}>
			<Markdown components={components}>{markdown}</Markdown>
		</th>
	);
};

const Td: FC<PropsWithChildren<TdProps>> = ({ datum, type, align }) => {
	let text = "";
	const [ test, output ] = Array.isArray(datum) ? datum : [ datum, datum ];
	switch(type) {
		case "gp":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid GP number [${test}]`;
			} else {
				text = typeof output === "number" ? translateGp(output) : output;
			}
			break;
		case "gp+":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid GP+ number [${test}]`;
			} else {
				text = typeof output === "number" ? translateGp(output, true) : output;
			}
			break;
		case "lbs":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid LB number [${test}]`;
			} else {
				text = typeof output === "number"
					? `${output.toLocaleString()} lb${output > 1 || output < -1 || !output ? "s": ""}.`
					: output;
			}
			break;
		case "lbs+":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid LB+ number [${test}]`;
			} else {
				text = typeof output === "number"
					? `${output >= 0 ? "+" : ""}${output.toLocaleString()} lb${output > 1 || output < -1 || !output ? "s": ""}.`
					: output;
			}
			break;
		case "bonus":
			// RawDatum is an interger
			if(typeof test !== "number") {
				text = `Invalid BONUS number [${test}]`;
			} else {
				text = typeof output === "number"
					? `${output >= 0 ? "+" : ""}${output.toLocaleString()}`
					: output;
			}
			break;
		case "pct":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid PCT number [${test}]`;
			} else {
				text = typeof output === "number"
					? output.toLocaleString() + "%"
					: output;
			}
			break;
		case "num":
			// RawDatum is a number
			if(typeof test !== "number") {
				text = `Invalid NUM number [${test}]`;
			} else {
				text = typeof output === "number"
					? output.toLocaleString()
					: output;
			}
			break;
		default:
			text = convertLinks([typeof output === "string" ? output : String(output)]);
	}
	return (
		<td className={align === false ? "ion-text-end" : (align === null ? "ion-text-center" : (align && "ion-text-start"))}>
			<Markdown components={components}>{text}</Markdown>
		</td>
	);
};

const TdRouterLink: FC<PropsWithChildren<TdRouterLinkProps>> = ({ datum, align }) => {
	const [ location, navigate ] = useLocation();
	const dispatch = useAppDispatch();
	// datum will be either `{linkString}` or `[ sortableThing, {linkString} ]`
	const linkString = Array.isArray(datum) ? datum[1] : datum;
	const m = (typeof linkString === "string") ? checkForEncodedLink(linkString, true) : false;
	if(!m) {
		return (
			<td className={align === false ? "ion-text-end" : (align === null ? "ion-text-center" : (align && "ion-text-start"))}>LINK EXPECTED: {linkString}</td>
		);
	}
	const [pre, link, output] = m;
	const click = useCallback(() => { navigate(`/${link}`); dispatch(goTo(`/${link}`)); }, [link, dispatch, navigate]);
	return (
		<td className={"ion-activatable cell-link" + (align === false ? " ion-text-end" : ((align || "") && " ion-text-start"))} onClick={click}>
			{output}
			<IonRippleEffect />
		</td>
	);
};

interface FilterObject {
	text: string
	otherText: string
	options: string[]
	toggles: number[][]
}

type SaveFunc = (
	headersActive: boolean[],
	rowsActive: boolean[]
) => void;

interface FilterProps {
	originalHeaders: string[]
	displayedHeaders: number[]
	originalRows: RawDatum[][]
	displayedRows: number[]
	filter?: Filter[]
	open: boolean
	setOpen: Dispatch<boolean>
	saveFunc: SaveFunc
}

const makeTestString = (input:boolean[]) => input.map(x => x ? "T" : "F").join("");

const getLinkText = (input: string) => {
	const m = checkForEncodedLink(input);
	return m ? m[2] : input;
};

const getValue = (x: RawDatum) => {
	return Array.isArray(x) ? x[0] : x;
};

interface RowItem {
	index: number
	style: {
		[key: string]: any
	}
	data: {
		activeRows: boolean[]
		rowTitles: string[]
	}
}

// IonPicker expects number | string | undefined, but we only use numbers...
const clamp = (input: string | number | undefined, max: number, min: number = 0): number => {
	const n = Number(input);
	if(n !== n) {
		return 0;
	} else if (n > max) {
		return max;
	} else if (n < min) {
		return min;
	}
	return n;
};

const FilterOption: FC<{
	filter: FilterObject,
	index: number,
	togglingFunc: (output: number[], value: string, to: boolean | null) => void
}> = (props) => {
	const { filter, index, togglingFunc } = props;
	const { text, options, toggles } = filter;
	const [currentValue, setCurrentValue] = useState(0);
	const [open, setOpen] = useState(false);
	return (
		<IonItem>
			<IonModal className="pickerSheet" isOpen={open} onDidDismiss={() => setOpen(false)} breakpoints={[0, 1]} initialBreakpoint={1}>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Filter Table Content</IonTitle>
						<IonButtons slot="end">
							<IonButton color="primary" onClick={() => setOpen(false)}>Done</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonPicker class="myPicker">
						<IonPickerColumn
							value={currentValue}
							onIonChange={e => setCurrentValue(clamp(e.detail.value, options.length - 1))}
						>
							<div slot="prefix">Where {text}</div>
							{options.map((opt, i) =>
								<IonPickerColumnOption key={`filter${index}option${i}:${opt}`} value={i}>
									{opt}
								</IonPickerColumnOption>
							)}
						</IonPickerColumn>
					</IonPicker>
				</IonContent>
			</IonModal>
			<IonLabel className="picker" onClick={() => setOpen(true)}>Where {text}: <IonText className="pickedText">{options[currentValue]}</IonText></IonLabel>
			<IonButton slot="end" color="success" onClick={() => togglingFunc(toggles[currentValue], options[currentValue], true)}>On</IonButton>
			<IonButton slot="end" color="secondary" onClick={() => togglingFunc(toggles[currentValue], options[currentValue], null)}><IonIcon slot="icon-only" src="/icons/overlap.svg" /></IonButton>
			<IonButton slot="end" color="danger" onClick={() => togglingFunc(toggles[currentValue], options[currentValue], false)}>Off</IonButton>
		</IonItem>
	);
};

const DisplayTableFilterModal: FC<FilterProps> = (props) => {
	const {
		originalHeaders: oh, // original headers
		displayedHeaders: dh, // indexes of displayed headers
		originalRows, // original rows
		displayedRows, // indexes of displayed rows
		filter,
		open,
		setOpen,
		saveFunc
	} = props;
	// Active Headers/Rows are arrays of true/false indicating if the element is visible or not
	const [activeHeaders, setActiveHeaders] = useState<boolean[]>([]);
	const [activeRows, setActiveRows] = useState<boolean[]>([]);
	const [rowTitles, setRowTitles] = useState<string[]>([]);
	const [testString, setTestString] = useState<string>("");
	const [filterObjects, setFilterObjects] = useState<null | FilterObject[]>(null);
	const [doAlert] = useIonAlert();
	const [toast, closeToast] = useIonToast();
	const originalHeaders = oh.slice(1);
	const displayedHeaders = dh.slice(1);
	const toggleAllHeaders = () => {
		const which = !activeHeaders[0];
		setActiveHeaders(originalHeaders.map(x => which));
	};
	const onLoad = useCallback(() => {
		// Set up filters
		if(filter) {
			const filters: FilterObject[] = [];
			filter.forEach((f, fi) => {
				const toggles: number[][] = [];
				const {col, labels, header} = f;
				const options: string[] = [];
				let how = "is";
				let other = "isn't";
				if(f.range) {
					const [ min, max ] = f.range;
					let x = min, i = 0;
					while(x <= max) {
						const found: number[] = [];
						originalRows.forEach((row, i) => {
							const test = getValue(row[col]) as number;
							if(test === x) {
								found.push(i);
							}
						});
						toggles.push(found);
						options.push(labels ? labels[i++] : `${x}`);
						x++;
					}
				} else if (f.has) {
					how = "includes";
					other = "doesn't include";
					const has = f.has;
					has.forEach((h, i) => {
						toggles.push([]);
						options.push(labels ? labels[i] : h)
					});
					if(f.word) {
						const hasRx = has.map(h => new RegExp(`\\b${h}\\b`));
						originalRows.forEach((row, i) => {
							const test = String(getValue(row[col]));
							hasRx.forEach((looking, j) => {
								if(test.match(looking)) {
									toggles[j].push(i);
								}
							});
						});
					} else {
						originalRows.forEach((row, i) => {
							const test = String(getValue(row[col]));
							has.forEach((looking, j) => {
								if(test.indexOf(looking) > -1) {
									toggles[j].push(i);
								}
							});
						});
					}
				} else if (f.equals) {
					const equals = f.equals;
					equals.forEach((e, i) => {
						toggles.push([]);
						options.push(labels ? labels[i] : `${e}`)
					});
					originalRows.forEach((row, i) => {
						const test = getValue(row[col]);
						equals.forEach((looking, j) => {
							if(test === looking) {
								toggles[j].push(i);
							}
						});
					});
				} else {
					console.log(`Invalid option in filter ${fi}.`);
					return;
				}
				// Add filter to list of filters
				const obj: FilterObject = {
					text: `${header || oh[col]} ${how}`,
					otherText: `${header || oh[col]} ${other}`,
					options,
					toggles
				};
				filters.push(obj);
			});
			setFilterObjects(filters);
		}
		// Set up headers info
		const finalHeaders: boolean[] = [];
			// displayedHeaders will always be equal to or shorter than originalHeaders
		originalHeaders.forEach((h, i) => {
			finalHeaders.push(displayedHeaders.indexOf(i + 1) > -1);
		});
		setActiveHeaders(finalHeaders);
		// Set up rows info - an array of titles and an array of booleans showing if that row is active
		const finalRows: boolean[] = [];
		const titles: string[] = [];
		originalRows.forEach((r, i) => {
			const title = r[0];
			if(Array.isArray(title)) {
				titles.push(getLinkText(title[1]));
			} else if (typeof title !== "string") {
				titles.push(String(title));
			} else {
				titles.push(getLinkText(title));
			}
			finalRows.push(displayedRows && (displayedRows.indexOf(i) > -1) ? true : false);
		});
		setRowTitles(titles);
		setActiveRows(finalRows);
		// Make something to test quickly
		setTestString(makeTestString([...finalHeaders, ...finalRows]));
	}, [
		filter,
		displayedHeaders,
		originalHeaders,
		originalRows,
		displayedRows,
		setRowTitles,
		setActiveHeaders,
		setActiveRows,
		setTestString
	]);
	const toggleHeader = (i: number) => {
		// Toggle the header at index `i`
		const newHeaders = [...activeHeaders];
		newHeaders[i] = !newHeaders[i];
		setActiveHeaders(newHeaders);
	};
	const toggleRow = (i: number) => {
		// Toggle the row at index `i`
		const newRows = [...activeRows];
		newRows[i] = !newRows[i];
		setActiveRows(newRows);
	};
	const maybeCancel = () => {
		if(testString === makeTestString([...activeHeaders, ...activeRows])) {
			setOpen(false);
		} else {
			doAlert({
				header: "Unsaved Work",
				message: "Are you sure you want to close this without saving?",
				buttons: [
					{
						text: "Cancel",
						role: "cancel"
					},
					{
						text: "Yes, Close",
						role: "confirm",
						handler: () => setOpen(false)
					}
				]
			});
		}
	};
	const doSave = () => {
		if(testString === makeTestString([...activeHeaders, ...activeRows])) {
			// No changes to save.
			setOpen(false);
			return;
		}
		// Save data
		saveFunc(activeHeaders, activeRows);
		// Close
		setOpen(false);
	};
	const toggleAllRows = (bool: boolean) => {
		setActiveRows(activeRows.map(x => bool));
		closeToast().then(() => toast({
			message: `Toggled ${bool ? "ON" : "OFF"} all rows.`,
			color: bool ? "success" : "danger",
			duration: 2500,
			position: "top"
		}));
	};
	const toggleRows = (output: number[], text: string, value: string, bool: boolean) => {
		const newRows = [...activeRows];
		let total = 0;
		output.forEach(i => {
			if(newRows[i] !== bool) {
				newRows[i] = bool;
				total++;
			}
		});
		setActiveRows(newRows);
		closeToast().then(() => toast({
			message: `Toggled ${bool ? "ON" : "OFF"} ${total} rows where ${text} ${value}.`,
			color: bool ? "success" : "danger",
			duration: 2500,
			position: "top"
		}));
	};
	const intersectRows = (output: number[], text: string, value: string) => {
		let total = 0;
		let saved = 0;
		const newRows = activeRows.map((r, i) => {
			if((output.indexOf(i) === -1) && r) {
				// If this is NOT in the target output,
				//   AND it's already on,
				// THEN toggle it off
				total++;
				return false;
			}
			r && saved++;
			return r;
		});
		setActiveRows(newRows);
		closeToast().then(() => toast({
			message: `Toggled OFF ${total} rows where ${text} ${value}, leaving ${saved} rows ON.`,
			color: "secondary",
			duration: 2500,
			position: "top"
		}));
	};
	const Row = ({data, index, style}: RowItem) => (
		<IonItem style={style} lines="full" className="itemLike">
			<IonToggle
				labelPlacement="start"
				checked={data.activeRows[index]}
				onIonChange={() => toggleRow(index)}
			>{data.rowTitles[index]}</IonToggle>
		</IonItem>
	);
	return (
		<IonModal isOpen={open} onIonModalDidDismiss={() => setOpen(false)} onIonModalWillPresent={onLoad}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Filter Table</IonTitle>
					<IonButtons slot="end">
						<IonButton onClick={maybeCancel}><IonIcon slot="icon-only" icon={closeCircle} /></IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines="full">
					<IonItem>
						<IonLabel>Toggle all headers</IonLabel>
						<IonButton slot="end" color="tertiary" onClick={toggleAllHeaders}>
							<IonIcon slot="icon-only" icon={repeat} />
						</IonButton>
					</IonItem>
					<IonItemDivider>Table Headers</IonItemDivider>
					{originalHeaders.map((oh, i) => (
						<IonItem key={`head${i}/-/${oh}`}>
							<IonToggle
								labelPlacement="start"
								checked={activeHeaders[i]}
								onIonChange={() => toggleHeader(i)}
							>{oh}</IonToggle>
						</IonItem>
					))}
					<IonItemDivider>Table Content</IonItemDivider>
					<IonItem>
						<IonLabel>Toggle all rows</IonLabel>
						<IonButton slot="end" color="success" onClick={() => toggleAllRows(true)}>On</IonButton>
						<IonButton slot="end" color="danger" onClick={() => toggleAllRows(false)}>Off</IonButton>
					</IonItem>
					{ !filterObjects ? <></> :
						filterObjects.map((f, i) =>
							<FilterOption key={`filter${i}:${f.text}`} filter={f} index={i} togglingFunc={
								(output: number[], value: string, to: boolean | null) =>
									to === null
										? intersectRows(output, f.otherText, value)
										: toggleRows(output, f.text, value, to)
							} />
						)
					}
					<IonItem>
						<IonLabel className="ion-text-center">
							<p>Selected rows below will be shown in the table.</p>
						</IonLabel>
					</IonItem>
				</IonList>
				<AutoSizer className="listLike">{
					({height, width}) =>
						<FixedSizeList
							height={height * 0.75}
							width={width}
							itemCount={rowTitles.length}
							itemSize={50}
							itemData={{rowTitles, activeRows}}
						>{Row}</FixedSizeList>
				}</AutoSizer>
			</IonContent>
			<IonFooter>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton onClick={maybeCancel} color="warning">
							<IonLabel>Cancel</IonLabel>
							<IonIcon slot="start" icon={close} />
						</IonButton>
					</IonButtons>
					<IonButtons slot="end">
						<IonButton onClick={doSave} color="success">
							<IonLabel>Save</IonLabel>
							<IonIcon slot="start" icon={filterIcon} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonModal>
	);
};

const makeString = (rows: RawDatum[][]) => {
	return rows.map((row, i) => {
		let output = "";
		row.forEach(bit => {
			if(Array.isArray(bit)) {
				output = output + bit.join(',');
			} else {
				output = output + String(bit);
			}
		});
		return output;
	});
};

const DisplayTable: FC<{ table: Table }> = ({ table }) => {
	const {
		id,
		headers,
		types: originalTypes,
		data,
		initialColumn,
		nullValue = "&mdash;",
		ripples = [],
		sortable = true,
		filter,
		alignments,
		sizes
	} = table;
	const dispatch = useAppDispatch();
	const [
		incomingColumnInfo,
		incomingFilterInfo
	]: [SortObject | undefined, TableObject | undefined] = useAppSelector(state => [
		state.displayTable.actives[id],
		state.displayTable.filters[id]
	]);
	const [initializedId, setInitializedId] = useState(id);
	const [initializedColumnInfo, setInitializedColumnInfo] = useState<SortObject | undefined>(undefined);
	const [initializedFilterInfo, setInitializedFilterInfo] = useState<TableObject | undefined>(undefined);
	const [activeHeaders, setActiveHeaders] = useState<number[]>(headers.map((h, i) => i));
	const [types, setTypes] = useState(originalTypes);
	const [rows, setRows] = useState(data);
	const [active, setActive] = useState(initialColumn);
	const [latestSortDirection, setLatestSortDirection] = useState(true);
	const [activeRows, setActiveRows] = useState<number[]>(data.map((x, i) => i));
	const [open, setOpen] = useState(false);
	const originalRowsAsStrings = makeString(data);
	const filterModalSaveFunc: SaveFunc = (headersActive, rowsActive) => {
		const newHeaders = [0]; // The `names` column is always shown
		const newTypes = [originalTypes[0]];
		headers.forEach((h, i) => {
			if(i && headersActive[i - 1]) {
				newHeaders.push(i);
				newTypes.push(originalTypes[i])
			}
		});
		setActiveHeaders(newHeaders);
		setTypes(newTypes);
		const newActiveRows: number[] = [];
		const newRows: RawDatum[][] = [];
		if(newHeaders.indexOf(active) === -1) {
			// The sorted header has gone away; reset to the first column and sort
			setActive(0);
			dispatch(setTableActive({id, data: {sortingOn: 0, normalSort: true}}));
			const sortedMixedData: [RawDatum[], boolean][] = rows.map((data, i) => [data, rowsActive[i]]);
			sortedMixedData.sort((a, b) => normalSort(a[0][0], b[0][0]));
			newActiveRows.push(
				...(sortedMixedData.map((data, i) => [i, ...data]) as [number, RawDatum[], boolean][])
				.filter(data => data[2])
				.map(data => data[0])
			);
			newRows.push(...sortedMixedData.map(data => data[0]));
		} else {
			// Set active rows
			newActiveRows.push(...rowsActive.map((r, i) => r ? i : -1).filter(r => r > -1));
			newRows.push(...rows);
		}
		// If rows are blank, reset to ALL rows
		setActiveRows(newActiveRows.length ? newActiveRows : data.map((r, i) => i));
		setRows(newRows);
		// Determine relative order of new rows order compared to original rows order
		//    old [A, B, C, D, E]
		//    new [E, B, A, D, C]
		//    result = [4, 1, 0, 3, 2]
		const compare = makeString(newRows);
		const newRowPositions = compare.map(c => originalRowsAsStrings.indexOf(c));
		// Save state
		dispatch(setTableFilter({id, data: { headers: newHeaders, rows: newActiveRows, order: newRowPositions }}));
	};
	const sorter: TriggerSortFunc = useCallback((index, sortDirection, rowsToSort = activeRows, save = true) => {
		// sorter(index: number, sortDirection: boolean)
		//   Returns the new sortDirection (true for normal, false for reverse)
		// This function reorganizes the rows and sets the 'active' column
		const sortfunc = sortDirection ? normalSort : reverseSort;
		const newAcRows: number[] = [];
		const newRows: RawDatum[][] = [];
		if(rowsToSort) {
			const testRows: [boolean, RawDatum[]][] = rows.map(r => [false, r]);
			rowsToSort.forEach(r => (testRows[r][0] = true));
			testRows.sort((a, b) => sortfunc(a[1][index], b[1][index]));
			testRows.forEach((r, i) => {
				const [ flag, row ] = r;
				flag && newAcRows.push(i);
				newRows.push(row);
			});
		} else {
			newRows.push(...rows);
			newRows.sort((a, b) => sortfunc(a[index], b[index]));
			newRows.forEach((m, i) => newAcRows.push(i));
		}
		setActiveRows(newAcRows);
		setRows(newRows);
		setActive(index);
		setLatestSortDirection(sortDirection);
		if(save) {
			const compare = makeString(newRows);
			const newRowPositions = compare.map(c => originalRowsAsStrings.indexOf(c));
			dispatch(updateTableFilterRows({id, data: {rows: newAcRows, order: newRowPositions}}));
			dispatch(setTableActive({id, data: {sortingOn: index, normalSort: sortDirection}}));
		}
	}, [rows, setRows, active, activeRows, setActive, dispatch]);
	const headerItems = useMemo(() => {
		return headers.map((th, i) => {
			return <Th
				key={`table/${id}/header/${i}`}
				index={i}
				sortState={i === active ? latestSortDirection : undefined}
				active={i === active}
				sorter={sorter}
				sortable={sortable && (types[i] !== 0)}
				size={sizes && sizes[i]}
			>{th}</Th>;
		}).filter((h, i) => (activeHeaders.indexOf(i) > -1))
	}, [headers, activeHeaders, id, initialColumn, sorter, active, types, sortable, sizes]);
	const rowItems = useMemo(() => {
		const visible = (activeRows) ? activeRows.map(n => rows[n]) : rows;
		return visible.map((row, i) => {
			const cells = row.filter((cell, j) => activeHeaders.indexOf(j) > -1).map((cell, j) => {
				const adjustedI = activeHeaders[j];
				const align = alignments && (alignments[adjustedI] || undefined)
				return (ripples.indexOf(adjustedI) > -1) ?
					<TdRouterLink
						datum={cell === null ? nullValue : cell}
						align={align}
						key={`table/${id}/row/${i}/cell/link/${adjustedI}`}
					/>
				:
					<Td
						type={types[j]}
						datum={cell === null ? nullValue : cell}
						align={align}
						key={`table/${id}/row/${i}/cell/${adjustedI}`}
					/>;
			});
			return <tr key={`table/${id}/row/${i}`}>{cells}</tr>;
		});
	}, [activeRows, activeHeaders, rows, types, nullValue, id, ripples]);
	const tableWidth = useMemo(() => {
		if(!sizes) {
			return undefined;
		}
		return { width: `${activeHeaders.reduce((total, i) => total + sizes[i], 0) + activeHeaders.length}rem` };
	}, [sizes, activeHeaders]);
	useEffect(() => {
		// Restore saved table filters and sort status
		if(
			initializedId === id
			&& initializedColumnInfo === incomingColumnInfo
			&& initializedFilterInfo == incomingFilterInfo
		) {
			return;
		}
		if(incomingFilterInfo !== initializedFilterInfo && incomingFilterInfo) {
			const { headers, rows, order } = incomingFilterInfo;
			// incoming headers may be [-1], which indicates the active headers were never changed
			if(!(headers.length && (headers[0] === -1))) {
				setActiveHeaders(headers);
				const newTypes = headers.map(h => originalTypes[h]);
				setTypes(newTypes);
			}
			setActiveRows(rows);
			const orderedRows = order.map(i => data[i]);
			setRows(orderedRows);
		} else {
			setActiveHeaders(headers.map((h, i) => i));
			setTypes(originalTypes);
			setActiveRows(data.map((x, i) => i));
			setRows(data);
		}
		if(initializedColumnInfo !== incomingColumnInfo && incomingColumnInfo) {
			const { sortingOn, normalSort } = incomingColumnInfo;
			setActive(sortingOn);
			setLatestSortDirection(normalSort);
		} else {
			setActive(initialColumn);
			setLatestSortDirection(true);
		}
		initializedId !== id && setInitializedId(id);
		initializedColumnInfo !== incomingColumnInfo && setInitializedColumnInfo(incomingColumnInfo);
		initializedFilterInfo !== incomingFilterInfo && setInitializedFilterInfo(incomingFilterInfo);
	}, [
		id, data, initializedId,
		initializedFilterInfo, initializedColumnInfo,
		incomingColumnInfo, incomingFilterInfo,
		setInitializedId, setInitializedColumnInfo,
		setInitializedFilterInfo, activeRows,
		sorter, setActive, setActiveHeaders,
		originalTypes, setTypes, setActiveRows
	]);
	const theFilterStuff = (data.length < 10 && headers.length <= 3) ? <></> : <>
		<DisplayTableFilterModal
			originalHeaders={headers}
			displayedHeaders={activeHeaders}
			originalRows={rows}
			displayedRows={activeRows}
			filter={filter}
			open={open}
			setOpen={setOpen}
			saveFunc={filterModalSaveFunc}
		/>
		<IonButton className="tableFilterButton" color="tertiary" size="small" shape="round" fill="outline" onClick={() => setOpen(true)}>
			<IonIcon slot="icon-only" icon={filterIcon} />
		</IonButton>
	</>;
	return (
		<div className="displayTable">
			{theFilterStuff}
			<ScrollContainer id={id}>
				<table key={`table/${id}`} style={tableWidth}>
					<thead>
						<tr>{headerItems}</tr>
					</thead>
					<tbody>
						{rowItems}
					</tbody>
				</table>
			</ScrollContainer>
		</div>
	);
};

export default DisplayTable;
