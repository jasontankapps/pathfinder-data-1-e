import { useParams } from 'wouter';
import getItem from '../components/getItem';
import aspects from './subpages/__aspect';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Shifter", "class/shifter"],
	["Aspects", "ability/aspects"]
];

type Data = typeof aspects;

type Params = { id?: keyof Data };

const AspectPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, aspects);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"shifteraspect--" + id}
		topLink={["Shifter Aspects", "ability/aspects"]}
	>{jsx}</BasicPage>;
};

export default AspectPage;
