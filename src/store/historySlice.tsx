import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface HistoryState {
	current: string
	previous: string[] // "most recent", "next recent", ... "first page shown"
	next: string[] // "next page", "the page after next", ... "last page shown"
}

type NewLocation = string;

// Define the initial value for the slice state
export const initialState: HistoryState = {
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
			};
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
			};
			return newState;
		},
		goBackNum: (state, action: PayloadAction<number>) => {
			let { payload } = action;
			const previous = [...state.previous];
			const next = [...state.next];
			if(previous.length === 0 || payload <= 0) {
				return state;
			} else if(previous.length <= payload) {
				return {
					current: previous.pop()!,
					previous: [],
					next: [...(previous.reverse()), state.current, ...next]
				};
			}
			next.unshift(state.current);
			while(payload > 1) {
				next.unshift(previous.shift()!);
				--payload;
			}
			const newState: HistoryState = {
				current: previous.shift()!,
				previous,
				next
			};
			return newState;
		},
		goForwardNum: (state, action: PayloadAction<number>) => {
			let { payload } = action;
			const previous = [...state.previous];
			const next = [...state.next];
			if(next.length === 0 || payload <= 0) {
				return state;
			} else if(next.length <= payload) {
				return {
					current: next.pop()!,
					previous: [...(next.reverse()), state.current, ...previous],
					next: []
				};
			}
			previous.unshift(state.current);
			while(payload > 1) {
				previous.unshift(next.shift()!);
				--payload;
			}
			const newState: HistoryState = {
				current: next.shift()!,
				previous,
				next
			};
			return newState;
		}
	}
});

// Export the generated action creators for use in components
export const { goTo, goBack, goForward, goBackNum, goForwardNum } = historySlice.actions;

// Export the slice reducer for use in the store configuration
export default historySlice.reducer;
