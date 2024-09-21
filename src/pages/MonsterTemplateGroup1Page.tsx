import getItem from '../components/getItem';
import templates from '../json/monsters_templates.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Monsters and NPCs", "main/monsters"],
];

type Data = typeof templates;

interface MonsterProps {
	id: string,
};

const MonsterTemplateGroup1Page: React.FC<MonsterProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), templates);

	return <BasicPage pageId={"template/" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default MonsterTemplateGroup1Page;
