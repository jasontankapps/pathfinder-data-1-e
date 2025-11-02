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
import Td from './displayTable/Td';
import Th from './displayTable/Th';
import TdRouterLink from './displayTable/TdRouterLink';
import StoreError from './displayTable/StoreError';
import DisplayTableFilterModal from './displayTable/DisplayTableFilterModal';
import { RawDatum, Table, Column } from '../types';
import { checkForEncodedLink } from './convertLinks';
import { FinderContext } from './contexts';
import ScrollContainer from './ScrollContainer';

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

const blankSortInfo: TableDataObject = {
	alphabeticalSort: true,
	hiddenHeaders: [],
	hiddenRows: []
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
	const sortingColumns = (sortOrder || defaultSortOrder);
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

	const sortedRowsWithBothOriginalIndices = useMemo(() => {
		return data
				// add index to each row [ ROW, index ]
			.map((row, j) => [row.map((cell, k) => [cell, k]), j] as SortableRow)
				// sort everything (non-destructive due to this being a mapped instance)
			.sort(sortOnColumns(sortingColumns, alphabeticalSort));
	}, [data, alphabeticalSort, sortingColumns]);

	const sortedAndFilteredRowsWithHeaderIndices = useMemo(() => {
		return sortedRowsWithBothOriginalIndices
				// hide hidden rows
			.filter(([, i]) => hiddenRows.every(hRow => hRow !== i))
				// remove hidden columns (and row indices)
			.map(([row,]) => row.filter((cell, i) => hiddenHeaders.every(hCol => hCol !== i)) as SortableCell[]);
	}, [sortedRowsWithBothOriginalIndices, hiddenHeaders, hiddenRows]);	

	const tableWidth = useMemo(() => {
		if(columns.some(col => col.size === undefined)) {
			return undefined;
		}
		const total = columns
			.filter((cell, i) => hiddenHeaders.every(hCol => hCol !== i))
			.reduce((total, col) => total + col.size!, columns.length - hiddenHeaders.length);
		return { width: `${total}rem` };
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
			<IonButton className="tableFilterButton" disabled={finderIsOpen} color="tertiary" size="small" shape="round" fill="outline" onClick={() => setOpen(true)}>
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
						}</tr>
					</thead>
					<tbody>
						{
							sortedAndFilteredRowsWithHeaderIndices.map((row, i) => {
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
