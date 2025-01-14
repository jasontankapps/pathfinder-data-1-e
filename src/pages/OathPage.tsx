import { useParams } from 'wouter';
import getItem from '../components/getItem';
import oaths from './subpages/__oath';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Paladin", "class/paladin"],
	["Paladin Oaths", "ability/oaths"]
];

type Data = typeof oaths;

type Params = { id?: keyof Data };

const OathPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, oaths);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/oath/" + id}
		topLink={["Paladin Oaths", "ability/oaths"]}
	>{jsx}</BasicPage>;
};

export default OathPage;
