import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { v7 as uuidv7 } from 'uuid';
import { Color as C, lightColors as lC, darkColors as dC } from './generated/__colors';

export type Color = C;

export const lightColors = lC;
export const darkColors = dC;

export const colorNames = Object.keys(lightColors) as Color[];

const hexToColor: {[key: string]: Color} = {};
colorNames.forEach(color => {
	hexToColor[lightColors[color]] = color;
	hexToColor[darkColors[color]] = color;
});

export const getColor = (input: unknown): Color => {
	return hexToColor[input as string] || "red";
}

export type Catalog = { [key: string]: string[] }

type Link = string;
type Title = string;

type Bookmark = [Link, Title];

export interface BookmarkGroup {
	// color of the bookmark
	color: Color
	// title of the bookmark
	title: string
	// pages (and dividers) being bookmarked here
	contents: Bookmark[] // [Link, Title]
	// whether or not we appear in the bookmark drop-down menu
	hidden: boolean
}

export type BookmarkDB = { [key: string]: BookmarkGroup }

interface BookmarkState {
	// "link/url" : [ "id of bookmark group", ... ]
	catalog: Catalog
	// "id": BookmarkGroup
	db: BookmarkDB
	// [ "id of bookmark group", ... ]
	order: string[]
}

export const universalBookmarkDividerId = "di-vi-der";

// Define the initial value for the slice state
export const initialState: BookmarkState = {
	db: {
		"original-red": {
			color: "red",
			title: "Red",
			contents: [],
			hidden: false
		},
		"original-yellow": {
			color: "yellow",
			title: "Yellow",
			contents: [],
			hidden: false
		},
		"original-green": {
			color: "green",
			title: "Green",
			contents: [],
			hidden: false
		},
		"original-cyan": {
			color: "cyan",
			title: "Cyan",
			contents: [],
			hidden: false
		},
		"original-blue": {
			color: "blue",
			title: "Blue",
			contents: [],
			hidden: false
		},
		"original-purple": {
			color: "purple",
			title: "Purple",
			contents: [],
			hidden: false
		},
		"original-grey": {
			color: "grey",
			title: "Grey",
			contents: [],
			hidden: false
		}
	},
	catalog: {},
	order: ["original-red", "original-yellow", "original-green", "original-cyan", "original-blue", "original-purple", "original-grey"]
};


// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const bookmarkSlice = createSlice({
	name: 'table',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		addBookmark: (state, action: PayloadAction<{id: string, link: string, title: string}>) => {
			const { id, link, title } = action.payload;
			const { db, catalog, ...etc} = state;
			const group = db[id];
			const newGroup = {
				...group,
				contents: [...group.contents, [link, title] as Bookmark]
			};
			const newDb = {...db};
			newDb[id] = newGroup;
			const newCat = {...catalog};
			if(newCat[link]) {
				newCat[link] = [...newCat[link], id];
			} else {
				newCat[link] = [id];
			}
			const newState = {
				db: newDb,
				catalog: newCat,
				...etc
			};
			return newState;
		},
		removeBookmark: (state, action: PayloadAction<{id: string, position: number}>) => {
			const { id, position } = action.payload;
			const { db, catalog, ...etc} = state;
			const newDb = {...db};
			const group = {...db[id]};
			const contents = group.contents;
			const link = contents[position][0];
			group.contents = contents.slice(0, position).concat(contents.slice(position + 1));
			newDb[id] = group;
			const newCat = {...catalog};
			if(newCat[link]) {
				const listing = newCat[link].filter(x => x !== id);
				if(listing.length) {
					newCat[link] = listing;
				} else {
					delete newCat[link];
				}
			}
			const newState = {
				db: newDb,
				catalog: newCat,
				...etc
			};
			return newState;
		},
		editBookmark: (state, action: PayloadAction<{id: string, title: string, position: number}>) => {
			const { id, title, position } = action.payload;
			const { db, order, catalog } = state;
			const etc = {...db};
			const contents = db[id].contents.map(([x, y]) => [x, y] as Bookmark);
			contents[position][1] = title;
			const newGroup = {
				...db[id],
				contents
			}
			etc[id] = newGroup;
			const newState = {
				order,
				db: etc,
				catalog
			};
			return newState;
		},
		addDivider: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const {order, db, catalog} = state;
			const etc = {...db};
			const group = {...db[id]};
			group.contents = [...group.contents, [universalBookmarkDividerId, uuidv7()]];
			etc[id] = group;
			const newState = {
				order,
				catalog,
				db: etc
			};
			return newState;
		},
		reorderBookmarks: (state, action: PayloadAction<{id: string, from: number, to: number}>) => {
			const { id, from, to } = action.payload;
			const { order, db, catalog } = state;
			const etc = {...db};
			const group = {...etc[id]};
			const contents = [...group.contents];
			if(from > to) {
				const pre = contents.slice(0, to);
				const mid = contents.slice(to, from);
				const end = contents.slice(from + 1);
				group.contents = [...pre, contents[from], ...mid, ...end];
			} else {
				const pre = contents.slice(0, from);
				const mid = contents.slice(from + 1, to + 1);
				const end = contents.slice(to + 1);
				group.contents = [...pre, ...mid, contents[from], ...end];
			}
			etc[id] = group;
			return {
				order,
				catalog,
				db: etc
			};
		},
		toggleHidden: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const { order, db, catalog } = state;
			const etc = {...db};
			const group = {...etc[id]};
			group.hidden = !group.hidden;
			etc[id] = group;
			return {
				order,
				catalog,
				db: etc
			};
		},
		renameGroup: (state, action: PayloadAction<{id: string, title: string}>) => {
			const { id, title } = action.payload;
			const { order, db, catalog } = state;
			const etc = {...db};
			const group = {...etc[id]};
			group.title = title;
			etc[id] = group;
			return {
				order,
				catalog,
				db: etc
			};
		},
		reorderGroups: (state, action: PayloadAction<{from: number, to: number}>) => {
			const { from, to } = action.payload;
			const newState = {...state};
			const ids = state.order;
			if(from > to) {
				const pre = ids.slice(0, to);
				const mid = ids.slice(to, from);
				const end = ids.slice(from + 1);
				newState.order = [...pre, ids[from], ...mid, ...end];
			} else {
				const pre = ids.slice(0, from);
				const mid = ids.slice(from + 1, to + 1);
				const end = ids.slice(to + 1);
				newState.order = [...pre, ...mid, ids[from], ...end];
			}
			return newState;
		},
		makeNewBookmarkGroup: (state, action: PayloadAction<[string, Color]>) => {
			const [title, color] = action.payload;
			const {order: incoming, db: oldDb, ...etc} = state;
			const id = uuidv7();
			const order = [...incoming, id];
			const db = {...oldDb};
			db[id] = {
				title,
				color,
				hidden: false,
				contents: []
			};
			return {
				...etc,
				order,
				db
			}
		},
		importBookmarkGroups: (state, action: PayloadAction<[string, Omit<BookmarkGroup, "hidden">][]>) => {
			const payload = action.payload;
			const {order: incoming, db: oldDb, catalog} = state;
			const db = {...oldDb};
			const order = [...incoming];
			payload.forEach(input => {
				const [id, group] = input;
				db[id] || order.push(id);
				db[id] = {
					...group,
					hidden: false
				}
			});
			const newState = { order, db, catalog };
			return newState;
		},
		deleteBookmarkGroup: (state, action: PayloadAction<string>) => {
			const id = action.payload;
			const {order: o, db: d, catalog: c} = state;
			const order = o.filter(x => x !== id);
			const catalog: Catalog = {};
			Object.entries(c).forEach(([link, contents]) => {
				catalog[link] = contents.filter(x => x !== id);
			});
			const db = {...d};
			delete db[id];
			return {
				db, order, catalog
			};
		},
		changeGroupColor: (state, action: PayloadAction<{id: string, color: Color}>) => {
			const {id, color} = action.payload;
			const {db: oldDb, ...etc} = state;
			const {color: x, ...rest} = oldDb[id];
			const db = {...oldDb};
			db[id] = {
				color,
				...rest
			}
			return {
				...etc,
				db
			};
		}
	}
});

// Export the generated action creators for use in components
export const {
	addBookmark, removeBookmark,
	editBookmark, reorderBookmarks,
	toggleHidden, renameGroup,
	reorderGroups, importBookmarkGroups,
	deleteBookmarkGroup, addDivider,
	makeNewBookmarkGroup, changeGroupColor
} = bookmarkSlice.actions;

// Export the slice reducer for use in the store configuration
export default bookmarkSlice.reducer;
