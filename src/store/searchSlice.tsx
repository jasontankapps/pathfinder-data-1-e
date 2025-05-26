import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RangeInSliceFormat } from '../types'

export type SearchIndex = RangeInSliceFormat<1, 14>;

interface BooleanState {
	separateWordSearch: boolean
	caseSensitive: boolean
	wholeWords: boolean
}

interface SearchState extends BooleanState {
	searchtext: string
	filter: SearchIndex[]
}

// Define the initial value for the slice state
export const initialState: SearchState = {
	searchtext: "",
	filter: [],
	separateWordSearch: false,
	caseSensitive: false,
	wholeWords: false
};

const update = (state: SearchState, prop: keyof BooleanState, value: boolean) => {
	const newState = {...state};
	newState[prop] = value;
	return newState;
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const searchSlice = createSlice({
	name: 'search',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setSearchFilter: (state, action: PayloadAction<SearchIndex[]>) => {
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
		},
		setSeparateWordSearch: (state, action: PayloadAction<boolean>) => update(state, "separateWordSearch", action.payload),
		setCaseSensitive: (state, action: PayloadAction<boolean>) => update(state, "caseSensitive", action.payload),
		setWholeWords: (state, action: PayloadAction<boolean>) => update(state, "wholeWords", action.payload)
	}
});

// Export the generated action creators for use in components
export const {
	setSearchFilter,
	setSearchQuery,
	setSeparateWordSearch,
	setCaseSensitive,
	setWholeWords
} = searchSlice.actions;

// Export the slice reducer for use in the store configuration
export default searchSlice.reducer;
