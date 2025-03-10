import { ReactElement } from "react";
import { SourceProp } from "./SourcesModal";
import { Hierarchy } from "../types";

export interface JsonDataProps {
	hasJL?: boolean,
	title: string,
	jsx: ReactElement,
	sources: SourceProp[],
	backwardsLink?: Hierarchy
	noFinder?: boolean
}

interface MaybeCopyOf<T> extends Partial<JsonDataProps> {
	copyof?: T
}

const getItem = <T extends { not_found: JsonDataProps }>(id: keyof T | undefined, json: T): JsonDataProps => {
	let data = (json[id || "not_found"] || json.not_found) as MaybeCopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[copyof || "not_found"] || json.not_found) as MaybeCopyOf<keyof T>), ...etc};
	}
	return data as JsonDataProps;
};

export default getItem;

export const getGuaranteedItem = <T extends unknown>(id: keyof T, json: T): JsonDataProps => {
	let data = json[id] as MaybeCopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...(json[copyof] as MaybeCopyOf<keyof T>), ...etc};
	}
	return data as JsonDataProps;
};
