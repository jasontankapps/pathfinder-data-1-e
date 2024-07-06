import { HierarchyArray, Table } from "../types";
import { SourceProp } from "./SourcesModal";

export interface JsonDataPropsMain {
	title: string,
	description: string[],
	tables?: Table[],
	sources?: SourceProp[]
	previous?: HierarchyArray
}

export function isId(id: string, value: object): asserts id is keyof typeof value {
	if(Object.keys(value).indexOf(id) === -1) {
		throw TypeError;
	}
}
export function isMain(value: JsonDataPropsMain): asserts value is JsonDataPropsMain {
	const { title, description, tables, sources, previous } = value;
	if(typeof title !== "string" || !Array.isArray(description) || description.some(line => typeof line !== "string")) {
		throw TypeError;
	}
}
