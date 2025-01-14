import { useParams } from 'wouter';
import getItem from '../components/getItem';
import psychic_implements from './subpages/__implement';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Occultist", "class/occultist"],
	["Implements", "ability/implements"]
];

type Data = typeof psychic_implements;

type Params = { id?: keyof Data };

const ImplementPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, psychic_implements);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/implement/" + id}
		topLink={["Psychic Implements", "ability/implements"]}
	>{jsx}</BasicPage>;
};

export default ImplementPage;
