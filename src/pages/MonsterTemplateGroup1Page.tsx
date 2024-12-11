import getItem from '../components/getItem';
import templates from './subpages/__template1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Monsters and NPCs", "main/monsters"],
	["Monster Templates", "main/monster_templates"]
];

type Data = typeof templates;

interface MonsterProps {
	id: string,
};

const MonsterTemplateGroup1Page: React.FC<MonsterProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), templates);

	return <BasicPage
		pageId={"template--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Monster Templates", "main/monster_templates"]}
	>{jsx}</BasicPage>;
};

export default MonsterTemplateGroup1Page;
