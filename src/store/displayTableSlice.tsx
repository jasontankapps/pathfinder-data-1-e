import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TableObject {
	headers: number[]
	rows: number[]
	order: number[]
}
export interface SortObject {
	sortingOn: number
	normalSort: boolean
}

interface FilterState {
	[key: string]: TableObject
}

interface ActiveState {
	[key: string]: SortObject
}

interface DisplayTableState {
	actives: ActiveState
	filters: FilterState
}

// Define the initial value for the slice state
const initialState: DisplayTableState = {
	actives: {},
	filters: {}
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const tableSlice = createSlice({
	name: 'table',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setTableFilter: (state, action: PayloadAction<{ id: string, data: TableObject }>) => {
			const { id, data } = action.payload;
			const newState = {...state.filters};
			newState[id] = data;
			return {actives: state.actives, filters: newState};
		},
		updateTableFilterRows: (state, action: PayloadAction<{ id: string, data: Omit<TableObject, "headers"> }>) => {
			const { id, data } = action.payload;
			const newState = {...state.filters};
			const bit = state.filters[id];
			newState[id] = {headers: bit ? bit.headers : [-1], ...data};
			return {actives: state.actives, filters: newState};
		},
		setTableActive: (state, action: PayloadAction<{ id: string, data: SortObject }>) => {
			const { id, data } = action.payload;
			const newState = {...state.actives};
			newState[id] = data;
			return {actives: newState, filters: state.filters};
		}
	}
});

// Export the generated action creators for use in components
export const { setTableFilter, setTableActive, updateTableFilterRows } = tableSlice.actions;

// Export the slice reducer for use in the store configuration
export default tableSlice.reducer;
