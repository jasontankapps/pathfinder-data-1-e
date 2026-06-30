import {
	FC,
	useCallback,
	useContext,
	useMemo,
	useState
} from 'react';
import {
	IonButton,
	IonIcon
} from '@ionic/react';
import { filter as filterIcon } from 'ionicons/icons';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
	setTableFilter,
	setTableSortDir,
	TableDataObject,
	setTablePrimarySortCol,
	getDefaultSortOrder
} from '../store/displayTableSlice';
import { RawDatum, Table, Column, LinkFormat } from '../types';
import Td from './displayTable/Td';
import Th from './displayTable/Th';
import TdRouterLink from './displayTable/TdRouterLink';
import StoreError from './displayTable/StoreError';
import DisplayTableFilterModal from './displayTable/DisplayTableFilterModal';
import { FinderContext } from './contexts';
import ScrollContainer from './ScrollContainer';

const FINAL_CHAR = String.fromCodePoint(0x10FFFF);

const blankSortInfo: TableDataObject = {
	alphabeticalSort: true,
	hiddenHeaders: [],
	hiddenRows: []
};

const validateSortOrder = (incoming: number[], cols: Column[]) => {
	// Test to make sure the saved values are compatible with the current table version
	const max = cols.length;
	return incoming.some(n => n >= max) ? false : incoming;
};

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
const findSortValue = (item: RawDatum) => {
	if(item === null || item === "~~") {
		return {string: FINAL_CHAR};
	} else if (typeof item === "string") {
		return {string: item};
	} else if (typeof item === "number") {
		return {number: item};
	} else if (Array.isArray(item)) {
		return {string: item[0]};
	}
	return findSortValue(item.sort === undefined ? null : item.sort);
};
const findDisplayValue = (item: RawDatum, nullish: string, col: Column) => {
	// item: (BasicDatum | [SortableValue, string | LinkFormat] | SortInfo) | null
	const {type, link} = col;
	let display: string | number | LinkFormat = "";
	let raw: string | number = "";
	let plus = false;
	if(item === null || item === "~~") {
		display = nullish;
		raw = display;
	} else if (typeof item === "string" || typeof item === "number") {
		display = item;
		raw = display;
	} else if (Array.isArray(item)) {
		// Link format
		const [txt, prop, protocol = link] = item;
		display = [txt, prop, protocol!];
		raw = txt;
	} else {
		// Sort info
		display = item.data || nullish;
		raw = item.sort;
	}
	switch(type) {
		case "gp+":
			plus = true;
		case "gp":
			// RawDatum is a number
			if(typeof raw !== "number") {
				if(display !== raw) {
					if(typeof display !== "number") {
						display = `Invalid GP${plus ? "+" : ""} number [${raw}/${display}]`;
					} else {
						display = translateGp(display, plus);
					}
				} else {
					display = `Invalid GP${plus ? "+" : ""} number [${raw}]`;
				}
			} else {
				display = translateGp(raw, plus);
			}
			break;
		case "lbs+":
			plus = true;
		case "lbs":
			// RawDatum is a number
			if(typeof raw !== "number") {
				if(display !== raw) {
					if(typeof display !== "number") {
						display = `Invalid LB${plus ? "+" : ""} number [${raw}/${display}]`;
					} else {
						display = `${plus && (display >= 0) ? "+" : ""}${display.toLocaleString()} lb${display === 1 ? "": "s"}.`;
					}
				} else {
					display = `Invalid LB${plus ? "+" : ""} number [${raw}]`;
				}
			} else {
				display = `${plus && (raw >= 0) ? "+" : ""}${raw.toLocaleString()} lb${raw === 1 ? "": "s"}.`;
			}
			break;
		case "bonus":
			// RawDatum is an interger
			if(typeof raw !== "number") {
				if(display !== raw) {
					if(typeof display !== "number") {
						display = `Invalid BONUS number [${raw}/${display}]`;
					} else {
						display = `${display >= 0 ? "+" : ""}${display.toLocaleString()}`;
					}
				} else {
					display = `Invalid BONUS number [${raw}]`;
				}
			} else {
				display = `${raw >= 0 ? "+" : ""}${raw.toLocaleString()}`;
			}
			break;
		case "pct":
			// RawDatum is a number
			if(typeof raw !== "number") {
				if(display !== raw) {
					if(typeof display !== "number") {
						display = `Invalid PCT number [${raw}/${display}]`;
					} else {
						display = display.toLocaleString() + "%";
					}
				} else {
					display = `Invalid PCT number [${raw}]`;
				}
			} else {
				display = raw.toLocaleString() + "%";
			}
			break;
		case "num":
			// RawDatum is a number
			// We just verify the numericness
			if(typeof raw !== "number") {
				display = `Invalid NUM number [${raw}/${display}]`;
			}
			break;
	}
	return display;
};
interface StringSort {
	string: string
	number?: never
}
interface NumberSort {
	number: number
	string?: never
}
type SortableValue = StringSort | NumberSort;
type SortableCell = [SortableValue, string | number | LinkFormat, number];
type SortableRow = [SortableCell[], number];
const normalSort = (a: SortableValue, b: SortableValue) => {
	// a, b, c...
	const {string: xs, number: xn} = a;
	const {string: ys, number: yn} = b;
	if(xs !== undefined && ys !== undefined) {
		return xs.localeCompare(ys, 'en');
	} else if (xn !== undefined && yn !== undefined) {
		return xn > yn ? 1 : (xn < yn ? -1 : 0);
	}
	const x: string = xs || String(xn);
	const y: string = ys || String(yn);
	return x.localeCompare(y, 'en', { numeric: true });
};
const reverseSort = (a: SortableValue, b: SortableValue) => {
	// z, y, x...
	return 0 - normalSort(a, b);
};
const sortOnColumns = (columns: number[], direction: boolean) => {
	// Returns a sort() function.
	return (a: SortableRow, b: SortableRow) => {
		let result = 0;
		const copy = [...columns];
		do {
			const column = copy.shift()!;
			if(direction) {
				result = normalSort(a[0][column][0], b[0][column][0]);
			} else {
				result = reverseSort(a[0][column][0], b[0][column][0]);
			}
		} while (!result && copy.length > 0);
		return result;
	};
};

const DisplayTable: FC<{ table: Table }> = ({ table }) => {
	const {
		id,
		columns,
		data,
		nullValue = "&mdash;",
		filter,
	} = table;
	const defaultSortOrder = getDefaultSortOrder(table);
	const {
		sortOrder,
		alphabeticalSort = true,
		hiddenHeaders = [],
		hiddenRows = []
	} = useAppSelector(state => state.displayTable[id] || blankSortInfo);
	const sortingColumns = ((sortOrder && validateSortOrder(sortOrder, columns)) || defaultSortOrder);
	const sortingColumn = sortingColumns[0];
	const finderIsOpen = useContext(FinderContext);
	const [open, setOpen] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const saveFromFilter = useCallback((hiddenHeaders: number[], hiddenRows: number[]) => {
		dispatch(setTableFilter({id, data: {hiddenHeaders, hiddenRows}}));
	}, [id, dispatch]);

	const filteredColumns = columns
		.map((col, i) => [col, i] as [Column, number])
		.filter(([, i]) => hiddenHeaders.every(hCol => hCol !== i));

	const rowsWithBothOriginalIndices: SortableRow[] = useMemo(() => {
		return data
				// add index to each row [ ROW, index ]
			.map((row, j) => [
					// convert cells into [sort info, string | number | LinkFormat, cell index]
				row.map((cell, k) => [
					findSortValue(cell),
					findDisplayValue(cell, nullValue, columns[k]),
					k
				]),
				j
			]);
	}, [data, columns]);

	const sortedRowsWithBothOriginalIndices = useMemo(() => {
		return rowsWithBothOriginalIndices
				// sort everything (non-destructive)
			.toSorted(sortOnColumns(sortingColumns, alphabeticalSort));
	}, [rowsWithBothOriginalIndices, alphabeticalSort, sortingColumns, nullValue]);

	const sortedAndFilteredRowsWithHeaderIndices = useMemo(() => {
		return sortedRowsWithBothOriginalIndices
				// hide hidden rows
			.filter(([, i]) => hiddenRows.every(hRow => hRow !== i))
				// remove hidden columns (and row indices)
			.map(([row,]) => row.filter((cell, i) => hiddenHeaders.every(hCol => hCol !== i)) as SortableCell[]);
	}, [sortedRowsWithBothOriginalIndices, hiddenHeaders, hiddenRows]);

	const tableGridStyle = useMemo(() => {
		if(columns.some(col => col.size === undefined)) {
			const total = columns
				.filter((cell, i) => hiddenHeaders.every(hCol => hCol !== i))
				.map(() => "1fr");
			return {
				display: "grid",
				gridTemplateColumns: total.join(" ")
			};
		}
		const gtc: number[] = [];
		const total = columns
			.filter((cell, i) => hiddenHeaders.every(hCol => hCol !== i))
			.map(cell => {
				let {size = 0} = cell;
				gtc.push(++size); // extra 1rem for every column
				return size;
			})
			.reduce((total, size) => total + size, 0);
		const style = {
			display: "grid",
			gridTemplateColumns: gtc.join("rem ") + "rem",
			width: `${total}rem`
		};
		return style;
	}, [columns, hiddenHeaders]);

	const sorter = (col: number) => {
		return () => {
			if(col === sortingColumn) {
				dispatch(setTableSortDir({table, dir: !alphabeticalSort}));
			} else {
				dispatch(setTablePrimarySortCol({table, col}));
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
			currentHiddenHeaders={hiddenHeaders}
			currentHiddenRows={hiddenRows}
		/>
			<IonButton
				className="tableFilterButton"
				disabled={finderIsOpen}
				color="tertiary"
				size="small"
				shape="round"
				fill={(hiddenHeaders.length + hiddenRows.length) > 0 ? "solid" : "outline"}
				onClick={() => setOpen(true)}
			>
				<IonIcon slot="icon-only" icon={filterIcon} />
			</IonButton>
	</>;

	return (
		<div className="displayTable">
			{theFilterStuff}
			<ScrollContainer id={id}>
				<div className="tabular" key={`table/${id}`} style={tableGridStyle}>
					<div className="row">{
						filteredColumns.map((pair) => {
							const [col, i] = pair;
							if(!col) {
								return <StoreError id={id} dispatch={dispatch} />;
							}
							return <Th
								key={`table/${id}/header/${i}`}
								index={i}
								sortState={i === sortingColumn ? alphabeticalSort : undefined}
								active={i === sortingColumn}
								sorter={sorter(i)}
								sortable={!col.unsortable}
								size={col.size}
							>{col.header}</Th>;
						})
					}</div>
					{
						sortedAndFilteredRowsWithHeaderIndices.map((row, i) => {
							if(!row) {
								return <StoreError id={id} dispatch={dispatch} />;
							}
							const cells = row.map(cellInfo => {
								const [, cell, j] = cellInfo;
								const col = columns[j];
								const { link = "", align } = col;
								if (link) {
									return (
										<TdRouterLink
											datum={cell as LinkFormat}
											align={align}
											key={`table/${id}/row/${i}/cell/link/${j}`}
										/>
									);
								}
								return (
									<Td
										datum={cell}
										align={align}
										key={`table/${id}/row/${i}/cell/${j}`}
									/>
								);
							});
							return <div className="row" key={`table/${id}/row/${i}`}>{cells}</div>;
						})
					}
				</div>
			</ScrollContainer>
		</div>
	);
}

export default DisplayTable;
