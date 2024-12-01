import { useParams } from 'react-router';
import getItem from '../components/getItem';
import families from './subpages/__family';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Monsters and NPCs", "main/monsters"],
];

type Data = typeof families;

type Params = { id?: keyof Data };

const MonsterFamilyPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, families);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"monster-family--" + id}
	>{jsx}</BasicPage>;
};

export default MonsterFamilyPage;
