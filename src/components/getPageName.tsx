import fuseIndex from '../json/_data__fuse-index.json';
import index from '../json/_data__linked-index.json';

interface NameObject {
	name: string
}
function isData<T>(value: unknown): asserts value is T[] {}
isData<NameObject>(fuseIndex);
isData<string>(index);

const getPageName = (id: string): string => {
	// Remove initial slash ("/main" => "main")
	const link = id.slice(1);
	switch (link) {
		case "":
			return "Main";
		case "about":
			return "About";
		case "search":
			return "Search";
	}
	const i = index.indexOf(link);
	if(i < 0) {
		return `Error: [${id}]`;
	} else if ((i + 1) > fuseIndex.length) {
		return `Error: [${i}] [${id}]`;
	}
	return fuseIndex[i].name;
};

export default getPageName;
