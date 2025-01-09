import { getGuaranteedItem } from '../components/getItem';
import families from './subpages/__family2';
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

const MonsterFamilyGroup2Page: React.FC<MonsterFamilyProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), families);

	return <BasicPage
		hasJL={hasJL}
		pageId={"family--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
	>{jsx}</BasicPage>;
};

export default MonsterFamilyGroup2Page;
