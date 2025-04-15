import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { v7 as uuidv7 } from 'uuid';

export type Color =
	"red" | "redorange" | "orange" | "lightorange"
	| "yellow" | "chartreuse" | "green" | "bluegreen"
	| "teal" | "cyan" | "blue" | "skyblue" | "purple"
	| "magenta" | "pink" | "brown" | "grey" | "bluegrey";

export type BookmarkDB = { [key: string]: BookmarkGroup }

type Catalog = { [key: string]: string[] }

type Link = string;
type Title = string;

type Bookmark = [Link, Title];

export interface BookmarkGroup {
	color: Color
	title: string
	contents: Bookmark[]
	hidden: boolean
}

export type ColorState = {[key in Color]: BookmarkGroup}

interface BookmarkState {
	catalog: Catalog
	db: BookmarkDB
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
		"original-bluegrey": {
			color: "grey",
			title: "Grey",
			contents: [],
			hidden: false
		}
	},
	catalog: {},
	order: ["red", "yellow", "green", "cyan", "blue", "purple", "grey"]
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
			const newCat = {...catalog};
			if(newCat[link]) {
				newCat[link] = [...newCat[link], id];
			} else {
				newCat[link] = [id];
			}
			const newState = {
				db: {
					...db,
					id: newGroup
				},
				catalog: newCat,
				...etc
			};
			return newState;
		},
		removeBookmark: (state, action: PayloadAction<{id: string, position: number}>) => {
			const { id, position } = action.payload;
			const { db, catalog, ...etc} = state;
			const group = db[id];
			const contents = group.contents;
			const link = contents[position][0];
			group.contents = contents.slice(0, position).concat(contents.slice(position + 1));
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
				db: {
					...db,
					id: group
				},
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
			const group = etc[id];
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
			const group = etc[id];
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
		addBookmarkGroups: (state, action: PayloadAction<Omit<BookmarkGroup, "hidden">[]>) => {
			const payload = action.payload;
			const {order: incoming, db: oldDb, catalog} = state;
			const db = {...oldDb};
			const order = [...incoming];
			payload.forEach((group: Omit<BookmarkGroup, "hidden">) => {
				const id = uuidv7();
				db[id] = {
					...group,
					hidden: false
				}
				order.push(id);
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
		}
	}
});

// Export the generated action creators for use in components
export const {
	addBookmark, removeBookmark,
	editBookmark, reorderBookmarks,
	toggleHidden, renameGroup,
	reorderGroups, addBookmarkGroups,
	deleteBookmarkGroup, addDivider
} = bookmarkSlice.actions;

// Export the slice reducer for use in the store configuration
export default bookmarkSlice.reducer;
