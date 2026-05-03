import { useCallback } from 'react';
import { useAppSelector } from '../store/hooks';
import { BookmarkDB } from '../store/bookmarksSlice';
import index from '../json/_GEN_allLinks';

interface Options1 {
	db: BookmarkDB
	booleanize?: never
}
interface Options2 {
	db?: never
	booleanize: boolean
}
type Options = Options1 | Options2

function checkForPageName (id: string, opt: Options2): boolean
function checkForPageName (id: string, opt: Options1): string
function checkForPageName (id: string, opt: Options): string | boolean {
	const { booleanize, db } = opt;
	const link = id.slice(1);
	// This matches only the non-fused pages
	switch (link) {
		case "":
			return booleanize || "Main";
		case "about":
			return booleanize || "About";
		case "icons":
			return booleanize || "Icons";
		case "settings":
			return booleanize || "Settings";
		case "search":
			return booleanize || "Search";
		case "feattreespage":
			return booleanize || "Feat Trees";
		case "importexport":
			return booleanize || "Import/Export Bookmarks";
		case "bookmarks":
			return booleanize || "Bookmarks";
	};
	// This matches fused pages.
	if(index[link]) {
		return booleanize || index[link];
	} else if (booleanize) {
		// We assume false at this point.
		return false;
	} else if (db) {
		// Now check to see if we're a bookmark group
		const m = link.match(/^bookmarks[/](.+)$/);
		if(m) {
			const group = db[m[1]];
			return "[B] " + ((group && group.title) || "(Unknown Bookmark Group)");
		}
	}
	// Return an error, otherwise
	return `[Error: ${link} not found]`;
}

export const doesPageExist = (id: string): boolean => {
	// NOTE: This will return false for bookmark groups
	// This is acceptable, as this code is only used on
	//   bookmarked pages, and groups cannot be bookmarked
	return checkForPageName(id, { booleanize: true });
};

const usePageName = (): ((id: string) => string) => {
	const db = useAppSelector(state => state.bookmarks.db);
	const getPageName = useCallback((x: string) => checkForPageName(x, { db }), [db]);
	return getPageName;
};

export default usePageName;
