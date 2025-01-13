import { useParams } from 'wouter';
import getItem from '../components/getItem';
import bloodlines from './subpages/__bloodragerbloodline';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Bloodrager", "class/bloodrager"],
	["Bloodrager Bloodlines", "ability/bloodrager_bloodlines"]
];

type Data = typeof bloodlines;

type Params = { id?: keyof Data };

const BloodragerBloodlinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, bloodlines);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"bloodrager-bloodline--" + id}
		topLink={["Bloodrager Bloodlines", "ability/bloodrager_bloodlines"]}
	>{jsx}</BasicPage>;
};

export default BloodragerBloodlinePage;
