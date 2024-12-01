import { getGuaranteedItem } from '../components/getItem';
import templates from './subpages/__template2';
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

const MonsterTemplateGroup2Page: React.FC<MonsterProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), templates);

	return <BasicPage
		pageId={"template--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
	>{jsx}</BasicPage>;
};

export default MonsterTemplateGroup2Page;
