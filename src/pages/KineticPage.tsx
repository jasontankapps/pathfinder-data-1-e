import { useParams } from 'react-router';
import talents from '../json/class_ability_kinetic_talents.json';
import { SourceProp } from '../components/SourcesModal';
import BasicPage from './BasicPage';
import { Hierarchy, HierarchyArray } from '../types';
import './Page.css';

type Types = "simple" | "composite" | "defense" | "infusion" | "utility";

interface TalentProps {
	name: string,
	description: string[],
	sources: SourceProp[],
	type?: Types
}
interface CopyOf<T> extends Partial<TalentProps> {
	copyof?: T
}

function getItem<T extends { not_found: TalentProps }> (id: keyof T | undefined, json: T): TalentProps {
	let data = (json[id || "not_found"] || json.not_found) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[copyof || "not_found"] || json.not_found) as CopyOf<keyof T>), ...etc};
	}
	return data as TalentProps;
};

const finalPage: { [id in Types]: Hierarchy } = {
	simple: ["Simple Blasts", "ability/simple_kinetic_blasts"],
	composite: ["Composite Blasts", "ability/composite_kinetic_blasts"],
	defense: ["Defense Wild Talents", "ability/defense_wild_talents"],
	infusion: ["Infusions", "ability/infusion_wild_talents"],
	utility: ["Wild Utility Talents", "ability/wild_utility_talents"]
};

type Data = typeof talents;

type Params = { id?: keyof Data };

const KineticPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, sources, type = "simple" } = getItem<Data>(id, talents);

	const hierarchy: HierarchyArray = [
		["Main", "main/main"],
		["Classes", "main/classes"],
		["Kineticist", "class/kineticist"],
		finalPage[type]
	];

	return <BasicPage
		title={title}
		markdown={markdown}
		/* tables={tables} */
		hierarchy={hierarchy}
		sources={sources}
		pageId={"kinetic--" + id}
	/>;
};

export default KineticPage;
