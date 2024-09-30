import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface HistoryState {
	current: string
	previous: string[]
	next: string[]
}

type NewLocation = string;

// Define the initial value for the slice state
const initialState: HistoryState = {
	current: "/",
	previous: [],
	next: []
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const historySlice = createSlice({
	name: 'history',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		goTo: (state, action: PayloadAction<NewLocation>) => {
			const newState: HistoryState = {
				current: action.payload,
				previous: [state.current, ...state.previous],
				next: []
			};
			console.log("Went to:", newState.current);
			return newState;
		},
		goBack: (state) => {
			const previous = [...state.previous];
			if(previous.length === 0) {
				return state;
			}
			const newState: HistoryState = {
				current: previous.shift()!,
				previous,
				next: [state.current, ...state.next]
			}
			console.log("Back:", newState.current);
			return newState;
		},
		goForward: (state) => {
			const next = [...state.next];
			if(next.length === 0) {
				return state;
			}
			const newState: HistoryState = {
				current: next.shift()!,
				previous: [state.current, ...state.previous],
				next
			}
			console.log("Forward:", newState.current);
			return newState;
		}
	}
});

// Export the generated action creators for use in components
export const { goTo, goBack, goForward } = historySlice.actions;

// Export the slice reducer for use in the store configuration
export default historySlice.reducer;
