import fuseIndex from '../json/_data__fuse-index.json';
import index from '../json/_data__linked-index.json';

interface NameObject {
	name: string
}
function isData<T>(value: unknown): asserts value is T[] {}
isData<NameObject>(fuseIndex);
isData<string>(index);

const switchback = (link: string) => {
	// This matches only the non-fused pages
	switch (link) {
		case "":
			return "Main";
		case "about":
			return "About";
		case "search":
			return "Search";
		case "feattreespage":
			return "Feat Trees";
		case "bookmarks":
			return "Bookmarks";
		case "bookmarks/red":
			return "Bookmarks (Red)";
		case "bookmarks/orange":
			return "Bookmarks (Orange)";
		case "bookmarks/yellow":
			return "Bookmarks (Yellow)";
		case "bookmarks/green":
			return "Bookmarks (Green)";
		case "bookmarks/chartreuse":
			return "Bookmarks (Chartreuse)";
		case "bookmarks/cyan":
			return "Bookmarks (Cyan)";
		case "bookmarks/blue":
			return "Bookmarks (Blue)";
		case "bookmarks/purple":
			return "Bookmarks (Purple)";
		case "bookmarks/magenta":
			return "Bookmarks (Magenta)";
		case "bookmarks/pink":
			return "Bookmarks (Pink)";
		case "importexport":
			return "Import/Export Bookmarks";
	};
	return null;
}

export const doesPageExist = (id: string): boolean => {
	// Remove initial slash ("/main" => "main")
	const link = id.slice(1);
	if(!switchback(link)) {
		const i = index.indexOf(link);
		if((i < 0) || (i >= fuseIndex.length)) {
			return false;
		}
	}
	return true;
};

const getPageName = (id: string): string => {
	// Remove initial slash ("/main" => "main")
	const link = id.slice(1);
	const maybe = switchback(link);
	if(maybe) {
		return maybe;
	}
	const i = index.indexOf(link);
	if(i < 0) {
		return `Error: [${id}]`;
	} else if (i >= fuseIndex.length) {
		return `Error: [${i}] [${id}]`;
	}
	return fuseIndex[i].name;
};

export default getPageName;
