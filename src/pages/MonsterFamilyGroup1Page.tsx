import getItem from '../components/getItem';
import families from './subpages/__family1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Monsters and NPCs", "main/monsters"],
];

type Data = typeof families;

interface MonsterFamilyProps {
	id: string,
};

const MonsterFamilyGroup1Page: React.FC<MonsterFamilyProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), families);

	return <BasicPage
		pageId={"family--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
	>{jsx}</BasicPage>;
};

export default MonsterFamilyGroup1Page;
