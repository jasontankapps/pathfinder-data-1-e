import { getGuaranteedItem } from '../components/getItem';
import templates from './subpages/__template3';
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

const MonsterTemplateGroup3Page: React.FC<MonsterProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), templates);

	return <BasicPage
		hasJL={hasJL}
		pageId={"template--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Monster Templates", "main/monster_templates"]}
	>{jsx}</BasicPage>;
};

export default MonsterTemplateGroup3Page;