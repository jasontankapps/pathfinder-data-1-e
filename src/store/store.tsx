import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import scrollReducer from './scrollSlice';
import historyReducer from './historySlice';
import searchReducer from './searchSlice';
import displayTableReducer from './displayTableSlice';

export const store = configureStore({
	reducer: {
		scroll: scrollReducer,
		history: historyReducer,
		search: searchReducer,
		displayTable: displayTableReducer
	}
});

// Infer the type of `store`
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch'];
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;

export default store;
