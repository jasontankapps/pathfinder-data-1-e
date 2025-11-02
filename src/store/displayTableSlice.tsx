import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Table } from '../types'

interface HiddenDataObject {
	hiddenHeaders: number[]
	hiddenRows: number[]
}
export interface TableDataObject extends HiddenDataObject {
	sortOrder?: number[]
	alphabeticalSort: boolean
}

export type DisplayTableState = { [key: string]: TableDataObject };

// Define the initial value for the slice state
export const initialState: DisplayTableState = {};

export const getDefaultSortOrder = (table: Table) => {
	const {columns, initialColumn} = table;
	const defaultSortOrder: number[] = columns.map((col, i) => col.unsortable ? -1 : i).filter(x => x >= 0 && x !== initialColumn);
	return [initialColumn, ...defaultSortOrder];
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const tableSlice = createSlice({
	name: 'table',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setTableFilter: (state, action: PayloadAction<{ id: string, data: HiddenDataObject }>) => {
			const { id, data } = action.payload;
			const newState = {...state};
			const newObject: TableDataObject = state[id]
				? {
					...state[id],
					...data
				}
				: {
					alphabeticalSort: true,
					...data
				};
			newState[id] = newObject;
			return newState;
		},
		setTableSortDir: (state, action: PayloadAction<{table: Table, dir: boolean}>) => {
			const { table, dir } = action.payload;
			const id = table.id;
			const newState = {...state};
			const newObject: TableDataObject = state[id]
				? {
					...state[id],
					alphabeticalSort: dir
				}
				: {
					alphabeticalSort: dir,
					hiddenHeaders: [],
					hiddenRows: []
				};
			newState[id] = newObject;
			return newState;
		},
		resetTables: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const newState = {...state};
			delete newState[id];
			return newState;
		},
		setTablePrimarySortCol: (state, action: PayloadAction<{table: Table, col: number}>) => {
			const {col, table} = action.payload;
			const id = table.id;
			const defaultSortOrder = getDefaultSortOrder(table);
			const newState = {...state};
			if(state[id] && state[id].sortOrder) {
				// Check if the stored info is still valid.
				if(state[id].sortOrder.some(bit => defaultSortOrder.indexOf(bit) < 0)) {
					// Invalid, so delete it and start fresh
					delete newState[id];
				}
			}
			// Construct a copy of the old info
			const newObject: TableDataObject =
				state[id]
					? {
						...state[id],
						alphabeticalSort: true // changing the sort always resets this
					}
					: {
						sortOrder: defaultSortOrder,
						alphabeticalSort: true,
						hiddenHeaders: [],
						hiddenRows: []
					};
			// Construct the new sort order
			const sortOrder = (newObject.sortOrder || defaultSortOrder).filter(c => c !== col);
			sortOrder.unshift(col);
			// Check if the new order is the same as default
			if(sortOrder.join(",") === defaultSortOrder.join(",")) {
				// If so, check if the remaining info is also default
				if(newObject.hiddenHeaders.length + newObject.hiddenRows.length === 0) {
					// If so, delete stored info
					delete newState[id];
				} else {
					// Otherwise, delete sort order and save the remaining info
					delete newObject.sortOrder;
					newState[id] = newObject;
				}
			} else {
				// Otherwise, save the sort order and remaining info
				newObject.sortOrder = sortOrder;
				newState[id] = newObject;
			}
			return newState;
		}
	}
});

// Export the generated action creators for use in components
export const {
	setTableFilter,
	setTableSortDir,
	resetTables,
	setTablePrimarySortCol
} = tableSlice.actions;

// Export the slice reducer for use in the store configuration
export default tableSlice.reducer;
