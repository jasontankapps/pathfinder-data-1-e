import { BookmarkGroup, universalBookmarkDividerId, colorNames, Color } from "../store/bookmarksSlice";
import { doesPageExist } from "../components/getPageName";

type BG = Omit<BookmarkGroup, "hidden">;

type Pair = [string, BG];

const parseImport = (data: unknown) => {
	// Test data for validity
	let msg = "";
	const found: Pair[] = [];
	if (Array.isArray(data)) {
		const [ok, info] = parseArrayInput(data, 1);
		if(ok) {
			found.push(...info.map(bit => ["original-" + bit.color, bit] as Pair));
		} else {
			msg = info + " in old Array import";
		}
	} else if (!data || typeof data !== "object") {
		msg = "ERR-2.0 Malformed import";
	} else {
		const ids: string[] = [];
		const test = Object.entries(data).map((pair: Pair) => {
			const [id, obj] = pair;
			ids.push(id);
			return obj;
		});
		const [ok, info] = parseArrayInput(test, 2);
		if(ok) {
			found.push(...info.map((bit, i) => [ids[i], bit] as Pair));
		} else {
			msg = info;
		}
	}
	if (msg) {
		return {
			ok: false,
			msg
		}
	}
	return {
		ok: true,
		found
	};
}

const parseArrayInput = (data: unknown[], cat: number): [true, BG[]] | [false, string] => {
	let msg = "";
	const error = `ERR-${cat}.`;
	const copy: BG[] = [];
	if (data.every(x => {
		if (!x || typeof x !== "object") {
			msg = error + ".1 Malformed item";
			return false; // data.every fails
		}
		// Check for hidden, just in case it slipped through somewhere.
		const { color, title, contents, hidden, ...etc } = x as BookmarkGroup;
		if (
			Object.keys(etc).length > 0
			|| title === undefined
			|| !color
			|| !contents
			|| typeof title !== "string"
			|| typeof color !== "string"
			|| colorNames.indexOf(color) === -1
			|| !Array.isArray(contents)
		) {
			msg = error + ".1.2 Malformed format in old Array import";
			return false; // data.every fails
		} else if (!contents.every((pair: any) => {
			if (!Array.isArray(pair)) {
				msg = error + ".2 Malformed formatting in old Array import";
				return false; // contents.every fails
			}
			const [link, title, ...etc] = pair;
			if (
				etc.length > 0
				|| typeof link !== "string"
				|| typeof title !== "string"
				|| !(title === universalBookmarkDividerId || doesPageExist(link))
			) {
				msg = error + ".3 Malformed contents in old Array import";
				return false; // contents.every fails
			}
			return true; // contents.every SUCCEEDS
		})) {
			return false; // data.every fails
		} else {
			const subset = contents.filter((pair: any) => pair[1] === universalBookmarkDividerId).map(pair => pair[1]);
			while (subset.length > 0) {
				const test = subset.shift()!;
				if (subset.some(sub => sub === test)) {
					msg = error + ".4 Duplicate contents in old Array import";
					return false; // data.every fails
				}
			}
		}
		copy.push({color, title, contents});
		return true; // data.every SUCCEEDS
	})) {
		return [true, copy];
	}
	return [false, msg];
};

export default parseImport;
