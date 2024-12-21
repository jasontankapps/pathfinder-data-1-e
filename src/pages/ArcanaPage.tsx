import { useParams } from 'react-router';
import getItem from '../components/getItem';
import arcana from './subpages/__magusarcana';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Magus", "class/magus"],
	["Magus Arcana", "ability/magus_arcana"]
];

type Data = typeof arcana;

type Params = { id?: keyof Data };

const ArcanaPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, arcana);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"magusarcana--" + id}
		topLink={["Magus Arcana", "ability/magus_arcana"]}
	>{jsx}</BasicPage>;
};

export default ArcanaPage;
