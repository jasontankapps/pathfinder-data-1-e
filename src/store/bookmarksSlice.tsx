import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Color = "red" | "orange" | "yellow" | "green" | "teal" | "cyan" | "blue" | "purple" | "magenta" | "pink";

type BookmarkDB = { [key: string]: Color[] }

interface BookmarkGroup {
	color: Color
	title: string
	contents: string[]
}

type ColorState = {[key in Color]: BookmarkGroup}

interface BookmarkState extends ColorState {
	db: BookmarkDB
}

// Define the initial value for the slice state
export const initialState: BookmarkState = {
	db: {},
	red: {
		color: "red",
		title: "Red",
		contents: []
	},
	orange: {
		color: "orange",
		title: "Orange",
		contents: []
	},
	yellow: {
		color: "yellow",
		title: "Yellow",
		contents: []
	},
	green: {
		color: "green",
		title: "Green",
		contents: []
	},
	teal: {
		color: "teal",
		title: "Teal",
		contents: []
	},
	cyan: {
		color: "cyan",
		title: "Cyan",
		contents: []
	},
	blue: {
		color: "blue",
		title: "Blue",
		contents: []
	},
	purple: {
		color: "purple",
		title: "Purple",
		contents: []
	},
	magenta: {
		color: "magenta",
		title: "Magenta",
		contents: []
	},
	pink: {
		color: "pink",
		title: "Pink",
		contents: []
	}
};


// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const bookmarkSlice = createSlice({
	name: 'table',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		addBookmark: (state, action: PayloadAction<{id: string, color: Color}>) => {
			const { id, color } = action.payload;
			const { db, ...etc} = state;
			const total = db[id] || [];
			const newState = {
				db: {...db},
				...etc
			};
			newState.db[id] = [...total, color];
			newState[color] = {
				...etc[color],
				contents: [...etc[color].contents, id]
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
				contents: etc[color].contents.filter(x => x !== id)
			};
			return newState;
		},
		rename: (state, action: PayloadAction<{color: Color, title: string}>) => {
			const { color, title } = action.payload;
			const newState = {...state};
			newState[color] = {
				...state[color],
				title
			};
			return newState;
		},
		reorder: (state, action: PayloadAction<{color: Color, ids: string[]}>) => {
			const { color, ids } = action.payload;
			const newState = {...state};
			newState[color] = {
				...state[color],
				contents: ids
			};
			return newState;
		}
	}
});

// Export the generated action creators for use in components
export const { addBookmark, removeBookmark, rename, reorder } = bookmarkSlice.actions;

// Export the slice reducer for use in the store configuration
export default bookmarkSlice.reducer;
