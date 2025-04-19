import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	createMigrate,
	PersistConfig,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import storage from 'redux-persist/lib/storage';
import scrollReducer, {initialState as scroll} from './scrollSlice';
import historyReducer, {initialState as history} from './historySlice';
import searchReducer, {initialState as search} from './searchSlice';
import displayTableReducer, {initialState as displayTable, DisplayTableState} from './displayTableSlice';
import bookmarksReducer, {BookmarkDB, BookmarkGroup, initialState as bookmarks} from './bookmarksSlice';

//
//
//
// ----- USE THIS to put in temporary changes for testing.
const initialAppState = {
	scroll,
	history,
	search,
	displayTable,
	bookmarks
};
// ----- END
//
//

const migrations = {
	10: (state: any) => {
		const {bookmarks} = state;
		const {order, db, ...etc} = bookmarks;
		const newDb: BookmarkDB = {};
		Object.entries(etc).forEach(([color, group]) => {
			newDb[`original-${color as string}`] = group as BookmarkGroup;
		});
		const catalog: {[key: string]: string[]} = {};
		Object.entries(db).forEach(([link, ids]) => {
			catalog[link] = (ids as string[]).map(id => `original-${id}`);
		});
		return {
			...state,
			bookmarks: {
				order: order.map((id: string) => `original-${id}`),
				db: newDb,
				catalog
			}
		}
	},
	11: (state: any) => {
		const modifiedTables: string[] = [
			"sorcerer archetypes",
			"bloodrager archetypes"
		];
		const {displayTable} = state;
		const {actives: a, filters: f} = displayTable as DisplayTableState;
		const actives = {...a};
		const filters = {...f};
		modifiedTables.forEach(id => {
			delete actives[id];
			delete filters[id];
		});
		return {
			...state,
			displayTable: {
				actives,
				filters
			}
		}
	}
};

const reducerConfig = {
	// SLICES here
	scroll: scrollReducer,
	history: historyReducer,
	search: searchReducer,
	displayTable: displayTableReducer,
	bookmarks: bookmarksReducer
};
const stateReconciler = (incomingState: any, originalState: any, reducedState: any, config: any) => {
	return autoMergeLevel1(incomingState, originalState, reducedState, config);
};
const persistConfig: PersistConfig<typeof initialAppState> = {
	key: 'root-pf-data',
	version: 11,
	storage,
	stateReconciler,
	migrate: createMigrate(migrations, { debug: false }),
	// Only persist bookmarks and display tables
	whitelist: ['bookmarks', 'displayTable']
};
const reducer = combineReducers(reducerConfig);
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
	reducer: persistedReducer,
//	preloadedState: initialAppState,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
				],
			},
		}
	)
});
const persistor = persistStore(store);
const storeInfo = { store, persistor };

/* Old Version, pre-persist
export const store = configureStore({
	reducer: {
		scroll: scrollReducer,
		history: historyReducer,
		search: searchReducer,
		displayTable: displayTableReducer
	}
});*/

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

export default storeInfo;
