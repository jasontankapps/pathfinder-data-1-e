import { useParams } from 'react-router';
import families from '../json/monsters_families.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

interface FamilyProps {
	name: string,
	description: string[],
	sources: string[],
	subhierarchy?: [string, string][]
	members?: string[]
}
interface CopyOf<T> extends Partial<FamilyProps> {
	copyof: T
}

function getItem<T extends { unknown: FamilyProps }> (id: keyof T | undefined, json: T): FamilyProps {
	let data = (json[id || "unknown"] || json.unknown) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[id || "unknown"] || json.unknown) as CopyOf<keyof T>), ...etc};
	}
	return data as FamilyProps;
};

const hierarchy: HierarchyArray = [
	["Monsters and NPCs", "monsters"],
];

type Data = typeof families;

type Params = { id?: keyof Data };

const BlessingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: d, sources, members } = getItem<Data>(id, families);

	const markdown = [...d];

	if(members) {
		markdown.push(
			"",
			"### Members of This Family:",
			"",
			...members
		);
	}

	return <BasicPage title={title} displayItem={{markdown}} {...{hierarchy, sources}} />;
};

export default BlessingPage;
