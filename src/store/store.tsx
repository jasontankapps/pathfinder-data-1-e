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
import bookmarksReducer, {BookmarkDB, BookmarkGroup, initialState as bookmarks, Catalog} from './bookmarksSlice';

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
		const {bookmarks, ...unchangedState} = state;
		const {order, db, ...etc} = bookmarks;
		const newDb: BookmarkDB = {};
		Object.entries(etc).forEach(([color, group]) => {
			newDb[`original-${color as string}`] = group as BookmarkGroup;
		});
		const catalog: Catalog = {};
		Object.entries(db).forEach(([link, ids]) => {
			catalog[link] = (ids as string[]).map(id => `original-${id}`);
		});
		return {
			...unchangedState,
			bookmarks: {
				order: order.map((id: string) => `original-${id}`),
				db: newDb,
				catalog
			}
		}
	},
	11: (state: any) => {
		const {displayTable, bookmarks, ...unchangedState} = state;
		// Reset tables that have been modified since the last update
		const modifiedTables: string[] = [
			"sorcerer archetypes",
			"bloodrager archetypes",
			"unchained summoner archetypes"
		];
		const {actives: a, filters: f} = displayTable as DisplayTableState;
		const actives = {...a};
		const filters = {...f};
		modifiedTables.forEach(id => {
			delete actives[id];
			delete filters[id];
		});
		// Fix any link changes since the last update
		const {order, db: oldDB, catalog: oldCat} = bookmarks;
		// FIX: greaterexploit => exploit
		const db: BookmarkDB = {};
		const catalog: Catalog = {};
		const replacer = /(^[/]?)greater(exploit[/])/
		Object.keys(oldDB).forEach(id => {
			const {color, title, contents:c, hidden} = oldDB[id] as BookmarkGroup;
			db[id] = {
				color,
				title,
				contents: c.map(pair => [ pair[0].replace(replacer, "$1$2"), pair[1] ] as [string, string]),
				hidden
			}
		});
		Object.keys(oldCat).forEach(link => {
			const newLink = link.replace(replacer, "$1$2");
			catalog[newLink] = oldCat[link] as string[];
		});
		return {
			...unchangedState,
			displayTable: {
				actives,
				filters
			},
			bookmarks: {
				order,
				db,
				catalog
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
