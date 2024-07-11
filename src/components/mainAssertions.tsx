import { HierarchyArray, Table } from "../types";
import { SourceProp } from "./SourcesModal";

export interface JsonDataPropsMain {
	title: string,
	description: (string | string[])[],
	tables?: Table[],
	sources?: SourceProp[]
	previous?: HierarchyArray
	singleTable?: boolean
}

export function isId(id: string, value: object): asserts id is keyof typeof value {
	if(Object.keys(value).indexOf(id) === -1) {
		throw TypeError;
	}
}
export function isMain(value: JsonDataPropsMain): asserts value is JsonDataPropsMain {
	const { title, description, tables, sources, previous, singleTable } = value;
	if(
		typeof title !== "string"
		|| !Array.isArray(description)
		|| !description.every(
			line => (
				typeof line === "string"
				|| (
					Array.isArray(line)
					&& line.every(bit => typeof bit === "string")
				)
			)
		)
	) {
		throw TypeError;
	}
}
