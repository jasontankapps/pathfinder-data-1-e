import {
	AnchorHTMLAttributes,
	ClassAttributes,
	Dispatch,
	FC,
	PropsWithChildren,
	useCallback,
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
import { Datum, Filter, RawDatum, Table, ColumnDataType, Column } from '../types';
import Link from './Link';
import convertLinks, { checkForEncodedLink } from './convertLinks';
import InnerLink from './InnerLink';
import { AppDispatch } from '../store/store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { goTo } from '../store/historySlice';
import { resetTables, setTableFilter, setTableSortCol, setTableSortDir, TableObject } from '../store/displayTableSlice';
import ScrollContainer from './ScrollContainer';
import getLink from './getLink';

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
	align?: "start" | "end"
}

interface TdProps extends TdRouterLinkProps {
	type?: ColumnDataType
}

type MDaProps = ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement> & ExtraProps;

const a = (props: MDaProps) => {
	const { href = "", children, id, "aria-label": ariaLabel } = props;
	if (href.match(/^http/)) {
		return <a href={href} id={id} aria-label={ariaLabel}>{children}</a>
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
		return {string: item.replace(/^[-a-z]+[/]/g, "") + " "};
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
type SortableCell = [RawDatum, number];
type SortableRow = [SortableCell[], number];
const sortOnColumn = (column: number, direction: boolean) => {
	// Returns a sort() function.
	return (a: SortableRow, b: SortableRow) => {
		if(direction) {
			return normalSort(a[0][column][0], b[0][column][0]);
		}
		return reverseSort(a[0][column][0], b[0][column][0]);
	};
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
		<td className={align === "end" ? "ion-text-end" : (align === "start" ? "ion-text-start" : undefined)}>
			<Markdown components={components}>{text}</Markdown>
		</td>
	);
};

const TdRouterLink: FC<PropsWithChildren<TdRouterLinkProps>> = ({ datum, align }) => {
	const [, navigate ] = useLocation();
	const dispatch = useAppDispatch();
	// datum will be either `{linkString}` or `[ sortableThing, {linkString} ]`
	const linkString = Array.isArray(datum) ? datum[1] : datum;
	const m = (typeof linkString === "string") ? checkForEncodedLink(linkString, { basic: true }) : false;
	if(!m) {
		return (
			<td className={align === "end" ? "ion-text-end" : (align === "start" ? "ion-text-start" : undefined)}>LINK EXPECTED: {linkString}</td>
		);
	}
	const [, originalLink, output] = m;
	const link = getLink(originalLink);
	const click = useCallback(() => { navigate(`/${link}`); dispatch(goTo(`/${link}`)); }, [link, dispatch, navigate]);
	return (
		<td className={"ion-activatable cell-link" + (align === "end" ? " ion-text-end" : (align === "start" ? " ion-text-start" : ""))} onClick={click}>
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
	hiddenColumns: number[],
	hiddenRows: number[]
) => void;
interface FilterProps {
	columns: Column[]
	rows: SortableRow[]
	currentHiddenRows: number[]
	currentHiddenColumns: number[]
	filter?: Filter[]
	open: boolean
	setOpen: Dispatch<boolean>
	saveFunc: SaveFunc
}
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
		rowStates: boolean[]
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
		columns,
		rows,
		currentHiddenRows,
		currentHiddenColumns,
		filter,
		open,
		setOpen,
		saveFunc
	} = props;
	const [columnStates, setColumnStates] = useState<boolean[]>([]);
	const [rowStates, setRowStates] = useState<boolean[]>([]);
	const [modified, setModified] = useState<boolean>(false);
	const [filterObjects, setFilterObjects] = useState<null | FilterObject[]>(null);
	const rowTitles = rows.map(sortableRow => {
		const title = sortableRow[0][0][0];
		if(Array.isArray(title)) {
			return getLinkText(title[1]);
		} else if (typeof title !== "string") {
			return String(title);
		}
		return getLinkText(title);
	});

	const headers = columns.slice(1).map(col => col.header);

	const onLoad = useCallback(() => {
		setModified(false);
		const cols: boolean[] = [];
		for(let x = 0; x < headers.length; x++) {
			// headers is 1 smaller than expected, because we omit the Title (index 0)
			cols.push(currentHiddenColumns.every(y => y !== x));
		}
		setColumnStates(cols);
		const rs: boolean[] = [];
		rows.forEach(pair => {
			const [, i] = pair;
			rs.push(currentHiddenRows.every(r => r !== i));
		});
		setRowStates(rs);
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
						rows.forEach((row, i) => {
							const test = getValue(row[0][col][0]) as number;
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
						rows.forEach((row, i) => {
							const test = String(getValue(row[0][col][0]));
							hasRx.forEach((looking, j) => {
								if(test.match(looking)) {
									toggles[j].push(i);
								}
							});
						});
					} else {
						rows.forEach((row, i) => {
							const test = String(getValue(row[0][col][0]));
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
					rows.forEach((row, i) => {
						const test = getValue(row[0][col][0]);
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
					text: `${header || headers[col - 1]} ${how}`,
					otherText: `${header || headers[col - 1]} ${other}`,
					options,
					toggles
				};
				filters.push(obj);
			});
			setFilterObjects(filters);
		}
	}, [headers, rows, currentHiddenColumns, currentHiddenRows, filter, setFilterObjects]);

	const rowVisibilityData = useMemo(() => {
		return {rowTitles, rowStates};
	}, [rowTitles, rowStates]);

/*

STATE is NOT inferred from props
STATE is NOT computable from props and/or other state
STATE is user input

State =
	hidden rows
	hidden columns

*/

	const [doAlert] = useIonAlert();
	const [toast, closeToast] = useIonToast();
	const toggleAllHeaders = () => {
		const which = !columnStates[0];
		setColumnStates(columnStates.map(x => which));
		setModified(true);
	};
	const toggleAllRows = (bool: boolean) => {
		setRowStates(rowStates.map(x => bool));
		setModified(true);
		closeToast().then(() => toast({
			message: `Toggled ${bool ? "ON" : "OFF"} all rows.`,
			color: bool ? "success" : "danger",
			duration: 2500,
			position: "top"
		}));
	};
	const maybeCancel = () => {
		if(!modified) {
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
	const toggleHeader = (i: number) => {
		// Toggle the header at index `i`
		const newHeaders = [...columnStates];
		newHeaders[i] = !newHeaders[i];
		setColumnStates(newHeaders);
		setModified(true);
	};
	const toggleRow = (i: number) => {
		// Toggle the row at index `i`
		const newRows = [...rowStates];
		newRows[i] = !newRows[i];
		setRowStates(newRows);
		setModified(true);
	};

	const doSave = () => {
		if(!modified) {
			// No changes to save.
			setOpen(false);
			return;
		}
		// Calculate data
		const hiddenHeaders: number[] = [];
		columnStates.forEach((bool, i) => {
			if(!bool) {
				// Hidden column
				// Add 1 because we omit the Title (index 0) in this modal
				hiddenHeaders.push(i + 1);
			}
		});
		const hiddenRows: number[] = [];
		rowStates.forEach((bool, i) => {
			if(!bool) {
				// format: [ [...row], originalRowIndex ]
				hiddenRows.push(rows[i][1]);
			}
		});
		// Save data
		saveFunc(hiddenHeaders, hiddenRows);
		// Close
		setOpen(false);
	};
	const toggleRows = (output: number[], text: string, value: string, bool: boolean) => {
		const newRows = [...rowStates];
		let total = 0;
		output.forEach(i => {
			if(newRows[i] !== bool) {
				newRows[i] = bool;
				total++;
			}
		});
		setRowStates(newRows);
		setModified(true);
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
		const newRows = rowStates.map((r, i) => {
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
		setRowStates(newRows);
		setModified(true);
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
				checked={rowStates[index]}
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
					{headers.map((oh, i) => (
						<IonItem key={`head${i}/-/${oh}`}>
							<IonToggle
								labelPlacement="start"
								checked={columnStates[i]}
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
							itemData={rowVisibilityData}
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

const noRipples: number[] = [];

interface StoreErrorProps {
	id: string
	dispatch: AppDispatch
}

const StoreError: FC<StoreErrorProps> = (props) => {
	const {id, dispatch} = props;
	return (
		<div>
			<strong>ERROR IN TABLE.</strong> This is a rare edge case that might happen, please tap on this button to fix it: <IonButton onClick={() => { dispatch(resetTables(id)); }} color="danger">Fix Error</IonButton>
		</div>
	);
};

const blankSortInfo: TableObject = {
	alpha: true,
	hiddencols: [],
	hiddenrows: []
};

const DisplayTable: FC<{ table: Table }> = ({ table }) => {
	const {
		id,
		columns,
		data,
		initialColumn,
		nullValue = "&mdash;",
		filter,
	} = table;
	const {sortcol, alpha, hiddencols, hiddenrows} = useAppSelector(state => state.displayTable[id] || blankSortInfo);
	const [sortingColumn, setSortingColumn] = useState<number>(sortcol !== undefined ? sortcol : initialColumn);
	const [sortDirection, setSortDirection] = useState<boolean>(alpha); // true = a-z, false = z-a
	const [hiddenRows, setHiddenRows] = useState<number[]>(hiddenrows);
	const [hiddenColumns, setHiddenColumns] = useState<number[]>(hiddencols);
	const [open, setOpen] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const saveFromFilter = useCallback((hiddencols: number[], hiddenrows: number[]) => {
		setHiddenColumns(hiddencols);
		setHiddenRows(hiddenrows);
		dispatch(setTableFilter({id, data: {hiddencols, hiddenrows}}));
	}, [setHiddenColumns, setHiddenRows, id]);

	const sortedAndFilteredColumns = columns
		.map((col, i) => [col, i] as [Column, number])
		.filter(([, i]) => hiddenColumns.every(hCol => hCol !== i));
	const {sortedRowsWithBothOriginalIndices, sortedAndFilteredRowsWithIndices} = useMemo(() => {
		const sortedRowsWithBothOriginalIndices = data
			.map((row, j) => [row.map((cell, k) => [cell, k]), j] as SortableRow)
			.sort(sortOnColumn(sortingColumn, sortDirection))
			.map(([row, i]) => [row.filter((cell, i) => hiddenColumns.every(hCol => hCol !== i)), i] as SortableRow);
		const sortedAndFilteredRowsWithIndices = sortedRowsWithBothOriginalIndices
			.filter(([, i]) => hiddenRows.every(hRow => hRow !== i))
			.map(([row]) => row);
		return {sortedRowsWithBothOriginalIndices, sortedAndFilteredRowsWithIndices};
	}, [data, hiddenColumns, hiddenRows, sortingColumn, sortDirection]);

	const tableWidth = useMemo(() => {
		if(columns.some(col => col.size === undefined)) {
			return undefined;
		}
		const total = columns
			.filter((cell, i) => hiddenColumns.every(hCol => hCol !== i))
			.reduce((total, col) => total + col.size!, columns.length - hiddenColumns.length);
		return { width: `${total}rem` };
	}, [columns, hiddenColumns]);

	const sorter = (col: number) => {
		return () => {
			if(col === sortingColumn) {
				setSortDirection(!sortDirection);
				dispatch(setTableSortDir({id, dir: !sortDirection}));
			} else {
				setSortDirection(true);
				setSortingColumn(col);
				dispatch(setTableSortCol({id, col: col === initialColumn ? undefined : col}));
			}
		};
	};

	// Only bother with a filter if we have a lot of rows or at least four headers
	const theFilterStuff = (data.length < 10 && columns.length <= 3) ? <></> : <>
		<DisplayTableFilterModal
			columns={columns}
			rows={sortedRowsWithBothOriginalIndices}
			filter={filter}
			open={open}
			setOpen={setOpen}
			saveFunc={saveFromFilter}
			currentHiddenColumns={hiddenColumns}
			currentHiddenRows={hiddenRows}
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
						<tr>{
							sortedAndFilteredColumns.map((pair) => {
								const [col, i] = pair;
								if(!col) {
									return <StoreError id={id} dispatch={dispatch} />;
								}
								return <Th
									key={`table/${id}/header/${i}`}
									index={i}
									sortState={i === sortingColumn ? sortDirection : undefined}
									active={i === sortingColumn}
									sorter={sorter(i)}
									sortable={!col.unsortable}
									size={col.size}
								>{col.header}</Th>;
							})
						}</tr>
					</thead>
					<tbody>
						{
							sortedAndFilteredRowsWithIndices.map((row, i) => {
								if(!row) {
									return <StoreError id={id} dispatch={dispatch} />;
								}
								const cells = row.map(cellInfo => {
									const [cell, j] = cellInfo;
									const col = columns[j];
									return (col.ripple) ?
										<TdRouterLink
											datum={cell === null ? nullValue : cell}
											align={col.align}
											key={`table/${id}/row/${i}/cell/link/${j}`}
										/>
									:
										<Td
											type={col.type}
											datum={cell === null ? nullValue : cell}
											align={col.align}
											key={`table/${id}/row/${i}/cell/${j}`}
										/>;
								});
								return <tr key={`table/${id}/row/${i}`}>{cells}</tr>;
							})
						}
					</tbody>
				</table>
			</ScrollContainer>
		</div>
	);
}

export default DisplayTable;
