import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ScrollState {
	[key: string]: number
}

interface Updater {
	id: string
	pos: number
}

// Define the initial value for the slice state
const initialState: ScrollState = {};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const scrollSlice = createSlice({
	name: 'scroll',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setPosition: (state, action: PayloadAction<Updater>) => {
			const {id, pos} = action.payload;
			const newState = {...state};
			newState[id] = pos;
			return newState;
		}
	}
})

// Export the generated action creators for use in components
export const { setPosition } = scrollSlice.actions

// Export the slice reducer for use in the store configuration
export default scrollSlice.reducer
