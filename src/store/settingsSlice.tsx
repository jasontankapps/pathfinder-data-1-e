import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
	noMythic: boolean
	noStamina: boolean
	noElephant: boolean
}

// Define the initial value for the slice state
export const initialState: SettingsState = {
	noStamina: false,
	noMythic: false,
	noElephant: false
};

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		toggleNoStamina: (state, action: PayloadAction<boolean>) => {
			const noStamina = action.payload;
			const {...newState} = state;
			return {
				...newState,
				noStamina
			};
		},
		toggleNoMythic: (state, action: PayloadAction<boolean>) => {
			const noMythic = action.payload;
			const {...newState} = state;
			return {
				...newState,
				noMythic
			};
		},
		toggleNoElephant: (state, action: PayloadAction<boolean>) => {
			const noElephant = action.payload;
			const {...newState} = state;
			return {
				...newState,
				noElephant
			};
		}
	}
});

// Export the generated action creators for use in components
export const {
	toggleNoStamina,
	toggleNoMythic,
	toggleNoElephant
} = settingsSlice.actions;

// Export the slice reducer for use in the store configuration
export default settingsSlice.reducer;
