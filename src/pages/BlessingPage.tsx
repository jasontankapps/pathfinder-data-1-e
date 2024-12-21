import { useParams } from 'react-router';
import getItem from '../components/getItem';
import blessings from './subpages/__blessing';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Warpriest", "class/warpriest"],
	["Blessings", "ability/blessings"]
];

type Data = typeof blessings;

type Params = { id?: keyof Data };

const BlessingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, blessings);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"blessing--" + id}
		topLink={["Warpriest Blessings", "ability/blessings"]}
	>{jsx}</BasicPage>;
};

export default BlessingPage;
