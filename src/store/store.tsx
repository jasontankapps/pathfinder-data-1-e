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
/*	11: (state: any) => {
		const {displayTable, ...unchangedState} = state;
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
		return {
			...unchangedState,
			displayTable: {
				actives,
				filters
			}
		}
	}, */
	12: (state: any) => {
		const {displayTable: dt, ...unchangedState} = state;
		// Reset all tables, as the store format has greatly changed
		const displayTable: DisplayTableState = {};
		return {
			...unchangedState,
			displayTable
		};
	},
	13: (state: any) => {
		const {bookmarks, ...unchangedState} = state;
		// Fix all link changes since the last update
		const {order, db: oldDB, catalog: oldCat} = bookmarks;
		// FIX:
		//   greaterexploit => exploit,
		//   legendaryspirit, outsiderspirit => spirit
		//   stanceragepower => ragepower
		//   magusarcana => arcana
		//   hellknightorder => hkorder
		//   bardicmasterpiece => masterpiece
		//   bloodragebloodline => blrgbloodline
		//   sorcererbloodline => sorcbloodline
		//   socialtalent => soctalent
		//   vigilantetalent => vigtalent
		//   investigatortalent => invtalent
		//   arcanediscovery => arcanedisc
		//   unchainedevolution => unchevolution
		//   tech-cybertech => tech-cyber
		//   tech-pharmaceutical => tech-pharma
		//   magic-augmentation => magic-aug
		//   magic-fleshcrafting => magic-fleshcraft
		//   prestigeclass => pclass
		//
		//   oath/oath_against_X, oath/oath_of_X => oath/X

		const db: BookmarkDB = {};
		const catalog: Catalog = {};

		const replacerHKOrder = /(^[/]?)hellknight(order[/])/;
		const replacementHKOrder = "$1hk$2";
		const replacerTalents = /(?:(^[/]?soc)ial|(^[/]?vig)ilante|(^[/]?inv)estigator)(talent[/])/;
		const replacementTalents = "$1$2$3$4";
		const replacerBloodrager = /(^[/]?)bloodrager(bloodline[/])/;
		const replacementBloodrager = "$1blrg$2";
		const replacerExploitSpiritRagePowerArcanaMstrPiece = /(^[/]?)(?:greater(exploit[/])|(?:outsider|legendary)(spirit[/])|stance(ragepower[/])|magus(arcana[/])|bardic(masterpiece[/]))/;
		const replacementExploitSpiritRagePowerArcanaMstrPiece = "$1$2$3$4$5$6";
		const replacerTechMagicArcane = /(?:(^[/]?tech-cyber)tech|(^[/]?tech-pharma)ceutical|(^[/]?magic-aug)mentation|(^[/]?magic-fleshcraft)ing|(^[/]?arcanedisc)overy)([/])/;
		const replacementTechMagicArcane = "$1$2$3$4$5$6";
		const replacerMstrPieceSorcUnchEvoPClass = /(^[/]?sorc)erer(bloodline[/])|(^[/]?unch)ained(evolution[/])|(^[/]?p)restige(class[/])/;
		const replacementMstrPieceSorcUnchEvoPClass = "$1$2$3$4$5$6";
		const replacerOaths = /(^[/]?oath[/])oath_(?:against|of)_/;
		const replacementOaths = "$1";

		Object.keys(oldDB).forEach(id => {
			const {color, title, contents:c, hidden} = oldDB[id] as BookmarkGroup;
			db[id] = {
				color,
				title,
				contents: c.map(pair =>
					[
						pair[0]
							.replace(replacerTalents, replacementTalents)
							.replace(replacerBloodrager, replacementBloodrager)
							.replace(replacerExploitSpiritRagePowerArcanaMstrPiece, replacementExploitSpiritRagePowerArcanaMstrPiece)
							.replace(replacerTechMagicArcane, replacementTechMagicArcane)
							.replace(replacerMstrPieceSorcUnchEvoPClass, replacementMstrPieceSorcUnchEvoPClass)
							.replace(replacerHKOrder, replacementHKOrder)
							.replace(replacerOaths, replacementOaths),
						pair[1]
					] as [string, string]
				),
				hidden
			}
		});
		Object.keys(oldCat).forEach(link => {
			const newLink = link
				.replace(replacerTalents, replacementTalents)
				.replace(replacerBloodrager, replacementBloodrager)
				.replace(replacerExploitSpiritRagePowerArcanaMstrPiece, replacementExploitSpiritRagePowerArcanaMstrPiece)
				.replace(replacerTechMagicArcane, replacementTechMagicArcane)
				.replace(replacerMstrPieceSorcUnchEvoPClass, replacementMstrPieceSorcUnchEvoPClass)
				.replace(replacerHKOrder, replacementHKOrder)
				.replace(replacerOaths, replacementOaths);
			catalog[newLink] = oldCat[link] as string[];
		});
		return {
			...unchangedState,
			bookmarks: {
				order,
				db,
				catalog
			}
		};
	},
	14: (state: any) => {
		const {displayTable: dt, ...unchangedState} = state;
		// Reset all tables, as the table format has greatly changed
		const displayTable: DisplayTableState = {};
		return {
			...unchangedState,
			displayTable
		};
	},
	15: (state: any) => {
		const {bookmarks, ...unchangedState} = state;
		// Fix all link changes since the last update
		const {order, db: oldDB, catalog: oldCat} = bookmarks;
		// FIX:
		//   druidcompanion/x => companion/x,
		//   rule/the_boneyard -> _oa
		//        dimension_of_dreams -> _oa
		//        akashic_record -> _oa
		//        material_plane -> _gg
		//        shadow_plane -> _gg
		//        negative_energy_plane -> _gg
		//        positive_energy_plane -> _gg
		//        plane_of_air -> _gg
		//        plane_of_earth -> _gg
		//        plane_of_fire -> _gg
		//        plane_of_water -> _gg
		//        ethereal_plane -> _gg
		//        astral_plane -> _gg
		//        heaven -> _gg
		//        utopia -> _gg
		//        hell -> _gg
		//        nirvana -> _gg
		//        purgatory -> _gg
		//        abaddon -> _gg
		//        elysium -> _gg
		//        limbo -> _gg
		//        the_abyss -> _gg

		const db: BookmarkDB = {};
		const catalog: Catalog = {};

		const replacerCompanion = /(^[/]?)druidcompanion[/]/;
		const replacementCompanion = "$1companion/";
		const replacerOA = /^([/]?rule[/](?:dimension_of_dreams|the_boneyard|akashic_record))([/]?)$/;
		const replacementOA = "$1_oa$2";
		const replacerGG = /^([/]?rule[/](?:(?:(?:materi|ethere|astr)al|shadow|(?:nega|posi)tive_energy)_plane|plane_of_(?:air|earth|fire|water)|hell|heaven|utopia|nirvana|purgatory|abaddon|elysium|limbo|the_abyss))([/]?)$/;
		const replacementGG = "$1_gg$2";

		Object.keys(oldDB).forEach(id => {
			const {color, title, contents:c, hidden} = oldDB[id] as BookmarkGroup;
			db[id] = {
				color,
				title,
				contents: c.map(pair =>
					[
						pair[0]
							.replace(replacerCompanion, replacementCompanion)
							.replace(replacerOA, replacementOA)
							.replace(replacerGG, replacementGG),
						pair[1]
					] as [string, string]
				),
				hidden
			}
		});
		Object.keys(oldCat).forEach(link => {
			const newLink = link
				.replace(replacerCompanion, replacementCompanion);
			catalog[newLink] = oldCat[link] as string[];
		});
		return {
			...unchangedState,
			bookmarks: {
				order,
				db,
				catalog
			}
		};
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
	version: 15,
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
