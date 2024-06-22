import { useParams } from 'react-router';
import templates from '../json/monsters_templates.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

interface TemplateProps {
	name: string,
	description: string[],
	sources: string[],
	subhierarchy?: [string, string][]
	members?: string[]
}
interface CopyOf<T> extends Partial<TemplateProps> {
	copyof: T
}

function getItem<T extends { missing: TemplateProps }> (id: keyof T | undefined, json: T): TemplateProps {
	let data = (json[id || "missing"] || json.missing) as CopyOf<keyof T>;
	while(data.copyof) {
		const { copyof, ...etc } = data;
		data = {...((json[id || "missing"] || json.missing) as CopyOf<keyof T>), ...etc};
	}
	return data as TemplateProps;
};

const hierarchy: HierarchyArray = [
	["Monsters and NPCs", "monsters"],
];

type Data = typeof templates;

type Params = { id?: keyof Data };

const BlessingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, sources } = getItem<Data>(id, templates);

	return <BasicPage title={title} displayItem={{markdown}} {...{hierarchy, sources}} />;
};

export default BlessingPage;
