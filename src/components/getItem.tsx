import { ReactElement } from "react";
import { SourceProp } from "./SourcesModal";
import { HierarchyArray } from "../types";

interface JsonDataProps {
	hasJL?: boolean,
	title: string,
	jsx: ReactElement,
	sources: SourceProp[],
	subhierarchy?: [string, string][]
}

interface MaybeCopyOf<T> extends Partial<JsonDataProps> {
	copyof?: T
}

function getItem<T extends { not_found: JsonDataProps}> (id: keyof T | undefined, json: T): JsonDataProps {
	let data = (json[id || "not_found"] || json.not_found) as MaybeCopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[copyof || "not_found"] || json.not_found) as MaybeCopyOf<keyof T>), ...etc};
	}
	return data as JsonDataProps;
};

export default getItem;

export function getGuaranteedItem<T> (id: keyof T, json: T): JsonDataProps {
	let data = json[id] as MaybeCopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...(json[copyof] as MaybeCopyOf<keyof T>), ...etc};
	}
	return data as JsonDataProps;
};
