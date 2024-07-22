import { useParams } from 'react-router';
import families from '../json/monsters_families.json';
import { SourceProp } from '../components/SourcesModal';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

export interface FamilyProps {
	name: string,
	description: string[],
	sources: SourceProp[],
	subhierarchy?: [string, string][]
	members?: string[]
	mythic_members?: string[]
}
interface CopyOf<T> extends Partial<FamilyProps> {
	copyof?: T
}

function getItem<T extends { not_found: FamilyProps }> (id: keyof T | undefined, json: T): FamilyProps {
	let data = (json[id || "not_found"] || json.not_found) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[copyof || "not_found"] || json.not_found) as CopyOf<keyof T>), ...etc};
	}
	return data as FamilyProps;
};

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Monsters and NPCs", "main/monsters"],
];

type Data = typeof families;

type Params = { id?: keyof Data };

const MonsterFamilyPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: d, sources, members, mythic_members } = getItem<Data>(id, families);

	const markdown = [...d];

	if(members) {
		markdown.push(
			"",
			"### Members of This Family:",
			"",
			...members
		);
	}

	if(mythic_members) {
		markdown.push(
			"",
			"### Mythic Members of This Family:",
			"",
			...mythic_members
		);
	}

	return <BasicPage title={title} markdown={markdown} hierarchy={hierarchy} sources={sources} />;
};

export default MonsterFamilyPage;
