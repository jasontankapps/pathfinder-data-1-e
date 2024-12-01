import { useParams } from 'react-router';
import getItem from '../components/getItem';
import masterpieces from './subpages/__bardicmasterpiece';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Bard", "class/bard"],
	["Bardic Masterpieces", "ability/bardic_masterpieces"]
];

type Data = typeof masterpieces;

type Params = { id?: keyof Data };

const MasterpiecePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, masterpieces);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"masterpiece--" + id}
		topLink={["Bardic Masterpieces", "ability/bardic_masterpieces"]}
	>{jsx}</BasicPage>;
};

export default MasterpiecePage;
