import { useParams } from 'wouter';
import getItem from '../components/getItem';
import inquisitions from './subpages/__inquisition';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Inquisitor", "class/inquisitor"],
	["Inquisitions", "ability/inquisitions"]
];

type Data = typeof inquisitions;

type Params = { id?: keyof Data };

const InquisitionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, inquisitions);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/inquisition/" + id}
		topLink={["Inquisitions", "ability/inquisitions"]}
	>{jsx}</BasicPage>;
};

export default InquisitionPage;
