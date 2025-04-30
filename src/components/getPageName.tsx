import index from '../json/_data__all_links.json';

interface LinkTitleObject {
	[key: string]: string
}
function isObject(value: unknown): asserts value is LinkTitleObject {}
isObject(index);

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
		case "importexport":
			return "Import/Export Bookmarks";
		case "bookmarks":
			return "Bookmarks";
	};
	if(link.match(/^bookmarks[/]/)) {
		return "[Bookmark Group]";
	}
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
	return switchback(link) || index[(link as keyof typeof index)] || `[Error: ${id} not found]`;
};

export default getPageName;
