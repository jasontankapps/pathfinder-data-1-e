import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Color = "red" | "orange" | "yellow" | "chartreuse" | "green" | "cyan" | "blue" | "purple" | "magenta" | "pink";

type BookmarkDB = { [key: string]: Color[] }

interface BookmarkGroup {
	color: Color
	title: string
	contents: [string, string][]
	hidden: boolean
}

export type ColorState = {[key in Color]: BookmarkGroup}

interface BookmarkState extends ColorState {
	db: BookmarkDB
	order: Color[]
}

// Define the initial value for the slice state
export const initialState: BookmarkState = {
	db: {},
	order: ["red", "orange", "yellow", "chartreuse", "green", "cyan", "blue", "purple", "magenta", "pink"],
	red: {
		color: "red",
		title: "Red",
		contents: [],
		hidden: false
	},
	orange: {
		color: "orange",
		title: "Orange",
		contents: [],
		hidden: false
	},
	yellow: {
		color: "yellow",
		title: "Yellow",
		contents: [],
		hidden: false
	},
	chartreuse: {
		color: "chartreuse",
		title: "Chartreuse",
		contents: [],
		hidden: false
	},
	green: {
		color: "green",
		title: "Green",
		contents: [],
		hidden: false
	},
	cyan: {
		color: "cyan",
		title: "Cyan",
		contents: [],
		hidden: false
	},
	blue: {
		color: "blue",
		title: "Blue",
		contents: [],
		hidden: false
	},
	purple: {
		color: "purple",
		title: "Purple",
		contents: [],
		hidden: false
	},
	magenta: {
		color: "magenta",
		title: "Magenta",
		contents: [],
		hidden: false
	},
	pink: {
		color: "pink",
		title: "Pink",
		contents: [],
		hidden: false
	}
};


// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const bookmarkSlice = createSlice({
	name: 'table',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		addBookmark: (state, action: PayloadAction<{id: string, title: string, color: Color}>) => {
			const { id, title, color } = action.payload;
			const { db, ...etc} = state;
			const total = db[id] || [];
			const newState = {
				db: {...db},
				...etc
			};
			newState.db[id] = [...total, color];
			newState[color] = {
				...etc[color],
				contents: [...etc[color].contents, [id, title]]
			};
			return newState;
		},
		removeBookmark: (state, action: PayloadAction<{id: string, color: Color}>) => {
			const { id, color } = action.payload;
			const { db, ...etc} = state;
			const newState = {
				db: {...db},
				...etc
			};
			newState.db[id] = db[id].filter(x => x !== color);
			newState[color] = {
				...etc[color],
				contents: etc[color].contents.filter(x => x[0] !== id)
			};
			return newState;
		},
		editBookmark: (state, action: PayloadAction<{id: string, title: string, color: Color}>) => {
			const { id, title, color } = action.payload;
			const { db, ...etc} = state;
			const newState = {
				db: {...db},
				...etc
			};
			newState[color] = {
				...etc[color],
				contents: etc[color].contents.map(x => {
					if (x[0] !== id) {
						return x;
					}
					return [x[0], title]
				})
			};
			return newState;
		},
		reorderBookmarks: (state, action: PayloadAction<{color: Color, from: number, to: number}>) => {
			const { color, from, to } = action.payload;
			const newState = {...state};
			const {contents: ids, ...etc} = newState[color];
			if(from > to) {
				const pre = ids.slice(0, to);
				const mid = ids.slice(to, from);
				const end = ids.slice(from + 1);
				newState[color] = {
					...etc,
					contents: [...pre, ids[from], ...mid, ...end]
				};
			} else {
				const pre = ids.slice(0, from);
				const mid = ids.slice(from + 1, to + 1);
				const end = ids.slice(to + 1);
				newState[color] = {
					...etc,
					contents: [...pre, ...mid, ids[from], ...end]
				};	
			}
			return newState;
		},
		toggleHidden: (state, action: PayloadAction<Color>) => {
			const newState = {...state};
			const color = action.payload;
			newState[color] = {
				...newState[color],
				hidden: !newState[color].hidden
			};
			return newState;
		},
		renameGroup: (state, action: PayloadAction<{color: Color, title: string}>) => {
			const { color, title } = action.payload;
			const newState = {...state};
			newState[color] = {
				...state[color],
				title
			};
			return newState;
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
		}
	}
});

// Export the generated action creators for use in components
export const {
	addBookmark, removeBookmark,
	editBookmark, reorderBookmarks,
	toggleHidden, renameGroup, reorderGroups
} = bookmarkSlice.actions;

// Export the slice reducer for use in the store configuration
export default bookmarkSlice.reducer;
