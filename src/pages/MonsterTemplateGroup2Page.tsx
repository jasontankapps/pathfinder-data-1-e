import { getGuaranteedItem } from '../components/getItem';
import templates from '../json/monsters_templates2.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main"],
	["Monsters and NPCs", "monsters"],
];

type Data = typeof templates;

const MonsterTemplateGroup2Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), templates);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default MonsterTemplateGroup2Page;
