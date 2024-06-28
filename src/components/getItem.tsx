import { CopyOf, JsonDataProps } from '../types';

function getItem<T extends { not_found: JsonDataProps}> (id: keyof T | undefined, json: T): JsonDataProps {
	let data = (json[id || "not_found"] || json.not_found) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[id || "not_found"] || json.not_found) as CopyOf<keyof T>), ...etc};
	}
	return data as JsonDataProps;
};

export default getItem;

export function getGuaranteedItem<T> (id: keyof T, json: T): JsonDataProps {
	let data = json[id] as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...(json[id] as CopyOf<keyof T>), ...etc};
	}
	return data as JsonDataProps;
};
