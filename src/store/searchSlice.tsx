import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RangeInSliceFormat } from '../types'

type Filter = RangeInSliceFormat<1, 13>;

interface SearchState {
	searchtext: string
	filter: Filter[]
}

// Define the initial value for the slice state
const initialState: SearchState = {
	searchtext: "",
	filter: []
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const searchSlice = createSlice({
	name: 'search',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setSearchFilter: (state, action: PayloadAction<Filter[]>) => {
			const newState: SearchState = {
				...state,
				filter: action.payload
			};
			return newState;
		},
		setSearchQuery: (state, action: PayloadAction<string>) => {
			const newState: SearchState = {
				...state,
				searchtext: action.payload
			};
			return newState;
		}
	}
});

// Export the generated action creators for use in components
export const { setSearchFilter, setSearchQuery } = searchSlice.actions;

// Export the slice reducer for use in the store configuration
export default searchSlice.reducer;
