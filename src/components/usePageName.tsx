import { useCallback } from 'react';
import { useAppSelector } from '../store/hooks';
import { BookmarkDB } from '../store/bookmarksSlice';
import index from '../json/_GEN_allLinks';

const switchback = (link: string, db: BookmarkDB = {}): string => {
	// This matches only the non-fused pages
	switch (link) {
		case "":
			return "Main";
		case "about":
			return "About";
		case "icons":
			return "Icons";
		case "settings":
			return "Settings";
		case "search":
			return "Search";
		case "feattreespage":
			return "Feat Trees";
		case "importexport":
			return "Import/Export Bookmarks";
		case "bookmarks":
			return "Bookmarks";
	};
	const m = link.match(/^[/]?bookmarks[/](.+)$/);
	if(m) {
		return "[B] " + ((db[m[1]] && db[m[1]].title) || "(Unknown Bookmark Group)");
	}
	return `[Error: ${link} not found]`;
}

export const doesPageExist = (id: string): boolean => {
	// Remove initial slash ("/main" => "main")
	const link = id.slice(1);
	return (switchback(link) || index[link]) ? true : false;
};

const usePageName = (): ((id: string) => string) => {
	const db = useAppSelector(state => state.bookmarks.db);
	const getPageName = useCallback((x: string) => switchback(x, db), [db]);
	return getPageName;
};

export default usePageName;
