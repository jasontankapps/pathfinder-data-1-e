import { CopyOf, JsonDataProps } from '../types';

function getItem<T extends { unknown: JsonDataProps}> (id: keyof T | undefined, json: T): JsonDataProps {
	let data = (json[id || "unknown"] || json.unknown) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[id || "unknown"] || json.unknown) as CopyOf<keyof T>), ...etc};
	}
	return data as JsonDataProps;
};

export default getItem;
