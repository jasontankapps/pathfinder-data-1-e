import fuseIndex from '../json/_data__fuse-index.json';
import index from '../json/_data__all_links.json';

interface NameObject {
	name: string
}
interface LinkTitleObject {
	[key: string]: string
}
function isData(value: unknown): asserts value is NameObject[] {}
isData(fuseIndex);
function isBoolean(value: unknown): asserts value is LinkTitleObject {}
isBoolean(index);

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
	return (switchback(link) || index[(link as keyof typeof index)]) ? true : false;
};

const getPageName = (id: string): string => {
	// Remove initial slash ("/main" => "main")
	const link = id.slice(1);
	const maybe = switchback(link);
	if(maybe) {
		return maybe;
	}
	return switchback(link) || index[(link as keyof typeof index)] || `[Error: ${id} not found]`;
};

export default getPageName;
