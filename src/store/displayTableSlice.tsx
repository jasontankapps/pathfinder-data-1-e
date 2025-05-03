import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HiddenObject {
	hiddencols: number[]
	hiddenrows: number[]
}
export interface TableObject extends HiddenObject {
	sortcol?: number | undefined
	alpha: boolean
}

export type DisplayTableState = { [key: string]: TableObject };

// Define the initial value for the slice state
export const initialState: DisplayTableState = {};

const tester = (test: TableObject) => {
	const {sortcol, alpha, hiddencols, hiddenrows} = test;
	return (sortcol === undefined && alpha && hiddencols.length === 0 && hiddenrows.length === 0);
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const tableSlice = createSlice({
	name: 'table',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setTableFilter: (state, action: PayloadAction<{ id: string, data: HiddenObject }>) => {
			const { id, data } = action.payload;
			const newState = {...state};
			const newObject: TableObject = state[id] ? {...state[id], ...data} : {alpha: true, ...data};
			if(tester(newObject)) {
				delete newState[id];
				return newState;
			}
			newState[id] = newObject;
			return newState;
		},
		setTableSortDir: (state, action: PayloadAction<{id: string, dir: boolean}>) => {
			const { id, dir } = action.payload;
			const newState = {...state};
			const newObject: TableObject = state[id] ? {...state[id], alpha: dir} : {alpha: dir, hiddencols: [], hiddenrows: []};
			if(tester(newObject)) {
				delete newState[id];
				return newState;
			}
			newState[id] = newObject;
			return newState;
		},
		setTableSortCol: (state, action: PayloadAction<{id: string, col: number | undefined}>) => {
			const { id, col } = action.payload;
			const newState = {...state};
			const newObject: TableObject = state[id] ? {...state[id], sortcol: col} : {sortcol: col, alpha: true, hiddencols: [], hiddenrows: []};
			if(tester(newObject)) {
				delete newState[id];
				return newState;
			}
			newState[id] = newObject;
			return newState;
		},
		resetTables: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const newState = {...state};
			delete newState[id];
			return newState;
		}
	}
});

// Export the generated action creators for use in components
export const { setTableFilter, setTableSortCol, setTableSortDir, resetTables } = tableSlice.actions;

// Export the slice reducer for use in the store configuration
export default tableSlice.reducer;
