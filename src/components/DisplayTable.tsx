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
	IonIcon,
	IonRippleEffect,
	IonModal,
	IonHeader,
	IonContent,
	IonFooter,
	IonToolbar,
	IonButtons,
	IonButton,
	IonTitle,
	IonLabel,
	IonList,
	IonItem,
	IonItemDivider,
	IonToggle,
	useIonAlert,
	IonSelect,
	IonSelectOption,
	SelectCustomEvent,
	useIonToast
} from '@ionic/react';
import { caretDown, caretUp, ellipse, closeCircle, close, filter, refresh } from 'ionicons/icons';
import Markdown, { ExtraProps } from 'react-markdown';
import { useHistory } from 'react-router-dom';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList } from 'react-window';
import { Datum, RawDatum, Table, TableColumnInfoTypes } from '../types';
import Link from './Link';
import convertLinks, { checkForEncodedLink } from './convertLinks';
import InnerLink from './InnerLink';
import { useAppDispatch } from '../store/hooks';
import { goTo } from '../store/historySlice';

type TriggerSortFunc = (index: number, isDescending: boolean) => boolean;

interface ThProps {
	index: number
	sorter: TriggerSortFunc
	initialSort?: boolean
	active: boolean
	children: string
	sortable: boolean
	size?: number
}

interface TdProps {
	datum: Datum
	type: TableColumnInfoTypes
	size?: number
}

interface TdRouterLinkProps {
	datum: Datum
	size?: number
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
	return { width: size };
}

const Th: FC<ThProps> = ({index, sorter, initialSort = false, children, active, sortable, size}) => {
	const [ isDescending, setIsDescending ] = useState(initialSort);
	const onClick = useCallback(() => {
		const newDescending = sorter(index, !isDescending);
		setIsDescending(newDescending);
	}, [index, sorter, isDescending]);
	const markdown = useMemo(() => convertLinks([children]), [children]);
	if(sortable) {
		return (
			<th className="ion-activatable sortable" onClick={onClick} style={getStyle(size)}>
				<div>
					<IonRippleEffect />
					<Markdown components={components}>{markdown}</Markdown>
					{active ? <DirectionIcon down={isDescending} /> : <IonIcon className="sortNil" icon={ellipse} />}
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

const Td: FC<PropsWithChildren<TdProps>> = ({ datum, type }) => {
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
		<td>
			<Markdown components={components}>{text}</Markdown>
		</td>
	);
};

const TdRouterLink: FC<PropsWithChildren<TdRouterLinkProps>> = ({ datum }) => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	// datum will be either `{linkString}` or `[ sortableThing, {linkString} ]`
	const linkString = Array.isArray(datum) ? datum[1] : datum;
	const m = (typeof linkString === "string") ? checkForEncodedLink(linkString) : false;
	if(!m) {
		return (
			<td>LINK EXPECTED: {linkString}</td>
		);
	}
	const [pre, link, output] = m;
	const click = useCallback(() => { history.push(`/${link}`); dispatch(goTo(`/${link}`)); }, [link, dispatch, history]);
	return (
		<td className="ion-activatable cell-link" onClick={click}>
			{output}
			<IonRippleEffect />
		</td>
	);
};

interface FilterProps {
	originalHeaders: string[]
	displayedHeaders: number[]
	typings: TableColumnInfoTypes[]
	originalRows: RawDatum[][]
	displayedRows: number[] | null
	active: number
	setHeaders: Dispatch<number[]>
	setTypes: Dispatch<TableColumnInfoTypes[]>
	setActiveRows: Dispatch<number[] | null>
	setActive: Dispatch<number>
	filterable?: number
	open: boolean
	setOpen: Dispatch<boolean>
}

const makeTestString = (input:boolean[]) => input.map(x => x ? "T" : "F").join("");

const getLinkText = (input: string) => {
	const m = checkForEncodedLink(input);
	return m ? m[2] : input;
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

const DisplayTableFilterModal: FC<FilterProps> = (props) => {
	const {
		originalHeaders: oh, // original headers
		displayedHeaders: dh, // indexes of displayed headers
		typings, // original types
		originalRows, // original rows
		displayedRows, // indexes of displayed rows (or null if all visible)
		active, // current sort
		setHeaders,
		setTypes,
		setActiveRows: setAcRow,
		setActive,
		filterable,
		open,
		setOpen
	} = props;
	// Active Headers/Rows are arrays of true/false indicating if the element is visible or not
	const [activeHeaders, setActiveHeaders] = useState<boolean[]>([]);
	const [activeRows, setActiveRows] = useState<boolean[]>([]);
	const [rowTitles, setRowTitles] = useState<string[]>([]);
	const [testString, setTestString] = useState<string>("");
	const [filterLabel, setFilterLabel] = useState("");
	const [filterableByRow, setFilterableByRow] = useState<null | { [x: string]: number[] }>(null);
	const [possibleFilters, setPossibleFilters] = useState<number[]>([])
	const [chosenFilter, setChosenFilter] = useState<number>(0);
	const [doAlert] = useIonAlert();
	const [toast] = useIonToast();
	const originalHeaders = oh.slice(1);
	const displayedHeaders = dh.slice(1);
	const toggleAll = () => {
		const which = !activeHeaders[0];
		setActiveHeaders(originalHeaders.map(x => which));
	};
	const onLoad = useCallback(() => {
		if(filterable !== undefined) {
			setFilterLabel(oh[filterable]);
			const possibles = new Set<number>();
			const byRow: { [x: string]: number[] } = {};
			if (originalRows.every((row, i) => {
				const f = row[filterable];
				if(Array.isArray(f)) {
					if(f[1].match(/^1\/[0-9]$/)) {
						// CR match
						const n: number = f[0] as number;
						possibles.add(n as number);
						byRow[String(n)] = [...(byRow[String(n)] || []), i];
					} else {
						const values = f[1].split(/, */).map(v => Number(v));
						if(values.some(v => v !== v)) {
							console.log(`ERROR: filterable [${filterable}] at row ${i}: ${f}`);
							return false;
						}
						values.forEach(v => {
							possibles.add(v);
							byRow[String(v)] = [...(byRow[String(v)] || []), i];
						});
					}
				} else if (typeof f !== "number" || f !== f) {
					console.log(`ERROR: filterable [${filterable}] at row ${i}`);
					return false;
				} else {
					possibles.add(f);
					byRow[String(f)] = [...(byRow[String(f)] || []), i];
				}
				return true;
			})) {
				// ok to go
				const f = Array.from(possibles).sort((a, b) => a - b);
				setPossibleFilters(f);
				setFilterableByRow(byRow);
				setChosenFilter(f[0]);
			}
		}
		const finalHeaders: boolean[] = [];
		// displayedHeaders will always be equal to or shorter than originalHeaders
		originalHeaders.forEach((h, i) => {
			finalHeaders.push(displayedHeaders.indexOf(i + 1) > -1);
		});
		setActiveHeaders(finalHeaders);
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
		setTestString(makeTestString([...finalHeaders, ...finalRows]));
	}, [
		filterable,
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
		const newHeaders = [...activeHeaders];
		newHeaders[i] = !newHeaders[i];
		setActiveHeaders(newHeaders);
	};
	const toggleRow = (i: number) => {
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
			// Nothing to do.
			setOpen(false);
			return;
		}
		const newHeaders = [0];
		const newTypes = [typings[0]];
		originalHeaders.forEach((h, i) => {
			if(activeHeaders[i]) {
				newHeaders.push(i + 1);
				newTypes.push(typings[i + 1])
			}
		});
		const newRows = originalRows.filter((r, i) => activeRows[i]);
		setHeaders(newHeaders);
		setTypes(newTypes);
		if(active && !activeHeaders[active - 1]) {
			// The sorted header has gone away; reset to the first column and sort
			setActive(0);
			const newActive: [boolean, RawDatum[]][] = activeRows.map((r, i) => [r, newRows[i]]);
			newActive.sort((a, b) => normalSort(a[1][0], b[1][0]));
			const translatedRows = newActive.map((r, i) => r[0] ? i : -1).filter(r => r > -1);
			setAcRow(translatedRows.length ? translatedRows : null);
			newRows.sort((a, b) => normalSort(a[0], b[0]));
		} else {
			// Set active rows
			const newActiveRows = activeRows.map((r, i) => r ? i : -1).filter(r => r > -1);
			setAcRow(newActiveRows.length ? newActiveRows : null);
		}
		// Close
		setOpen(false);
	};
	const toggleFilter = (i: number) => {
		const label = String(i);
		if (filterableByRow) {
			const newRows = [...activeRows];
			const which = !newRows[filterableByRow[label][0]];
			filterableByRow[label].forEach(r => (newRows[r] = which));
			setActiveRows(newRows);
			toast({
				message: `Toggled all ${filterLabel} ${i < 0 ? `1/${0-i}` : i} ${which ? "on" : "off"}.`,
				color: "success",
				duration: 2500,
				position: "middle"
			})
		}		
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
						<IonButton slot="end" color="tertiary" onClick={toggleAll}>
							<IonIcon slot="icon-only" icon={refresh} />
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
					{ filterableByRow ? <IonItem>
						<IonSelect
							justify="start"
							label={`Select ${filterLabel}`}
							onIonChange={(ev: SelectCustomEvent<number>) => setChosenFilter(ev.detail.value)}
							value={chosenFilter}
						>
							{possibleFilters.map(f => <IonSelectOption key={`filterValue${f}`} value={f}>{f < 0 ? `1/${0-f}` : f}</IonSelectOption>)}
						</IonSelect>
						<IonButton slot="end" onClick={() => toggleFilter(chosenFilter)}>Toggle</IonButton>
					</IonItem> : <></>}
					<IonItem>
						<IonLabel className="ion-text-center">
							<p>Selected items below will be shown in the table.</p>
							<p>If no items are selected, <strong>all</strong> items are shown.</p>
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
							<IonIcon slot="start" icon={filter} />
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonFooter>
		</IonModal>
	);
};

const DisplayTable: FC<{ table: Table }> = ({ table }) => {
	const {
		id,
		headers,
		types: typings,
		data,
		initialColumn,
		nullValue = "&mdash;",
		ripples = [],
		sortable = true,
		filterable,
		sizes
	} = table;
	const [activeHeaders, setActiveHeaders] = useState<number[]>(headers.map((h, i) => i));
	const [types, setTypes] = useState(typings);
	const [rows, setRows] = useState(data);
	const [active, setActive] = useState(initialColumn);
	const [activeRows, setActiveRows] = useState<number[] | null>(null);
	const [open, setOpen] = useState(false);
	const sorter: TriggerSortFunc = useCallback((index, isDescending) => {
		// sorter(index: number, isDescending: boolean)
		//   Returns the boolean opposite of isDescending
		// This function reorganizes the rows and sets the 'active' column
		const normal = (active !== index) || isDescending;
		const sortfunc = normal ? normalSort : reverseSort;
		if(activeRows) {
			const testRows: [boolean, RawDatum[]][] = rows.map(r => [false, r]);
			activeRows.forEach(r => (testRows[r][0] = true));
			testRows.sort((a, b) => sortfunc(a[1][index], b[1][index]));
			const newActive: number[] = [];
			const newRows: RawDatum[][] = [];
			testRows.forEach((r, i) => {
				const [ flag, row ] = r;
				flag && newActive.push(i);
				newRows.push(row);
			});
			setActiveRows(newActive);
			setRows(newRows);
		} else {
			const newRows = [...rows];
			newRows.sort((a, b) => sortfunc(a[index], b[index]));
			setRows(newRows);
		}
		setActive(index);
		return normal;
	}, [rows, setRows, active, activeRows, setActive]);
	const headerItems = useMemo(() => headers.map((th, i) => {
		return <Th
			key={`table/${id}/header/${i}`}
			index={i}
			initialSort={i === initialColumn}
			active={i === active}
			sorter={sorter}
			sortable={sortable && (types[i] !== 0)}
			size={Array.isArray(sizes) ? sizes[i] : sizes}
		>{th}</Th>;
	}).filter((h, i) => (activeHeaders.indexOf(i) > -1)), [headers, activeHeaders, id, initialColumn, sorter, active, types, sortable, sizes]);
	const rowItems = useMemo(() => {
		const visible = (activeRows) ? activeRows.map(n => rows[n]) : rows;
		return visible.map((row, i) => {
			const cells = row.filter((cell, j) => activeHeaders.indexOf(j) > -1).map((cell, j) => {
				const adjustedI = activeHeaders[j];
				return (ripples.indexOf(adjustedI) > -1) ?
					<TdRouterLink
						datum={cell === null ? nullValue : cell}
						key={`table/${id}/row/${i}/cell/${adjustedI}`}
					/>
				:
					<Td
						type={types[adjustedI]}
						datum={cell === null ? nullValue : cell}
						key={`table/${id}/row/${i}/cell/${adjustedI}`}
					/>;
			});
			return <tr key={`table/${id}/row/${i}`}>{cells}</tr>;
		});
	}, [activeRows, activeHeaders, rows, types, nullValue, id, ripples]);
	const tableWidth = useMemo(() => {
		if(!sizes) {
			return undefined;
		} else if (Array.isArray(sizes)) {
			return { width: activeHeaders.reduce((total, i) => total + sizes[i], 0) };
		}
		return { width: activeHeaders.length * sizes };
	}, [sizes, activeHeaders]);
	const theFilterStuff = (data.length < 10 && headers.length <= 3) ? <></> : <>
		<DisplayTableFilterModal
			originalHeaders={headers}
			displayedHeaders={activeHeaders}
			typings={typings}
			originalRows={rows}
			displayedRows={activeRows}
			active={active}
			setHeaders={setActiveHeaders}
			setTypes={setTypes}
			setActiveRows={setActiveRows}
			setActive={setActive}
			filterable={filterable}
			open={open}
			setOpen={setOpen}
		/>
		<IonButton className="tableFilterButton" color="tertiary" size="small" shape="round" fill="outline" onClick={() => setOpen(true)}>
			<IonIcon slot="icon-only" icon={filter} />
		</IonButton>
	</>;
	return (
		<>
			{theFilterStuff}
			<div className="tableWrap">
				<table key={`table/${id}`} style={tableWidth}>
					<thead>
						<tr>{headerItems}</tr>
					</thead>
					<tbody>
						{rowItems}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default DisplayTable;
