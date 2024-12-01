import { useParams } from 'react-router';
import getItem from '../components/getItem';
import bloodlines from './subpages/__sorcererbloodline';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Sorcerer", "class/sorcerer"],
	["Sorcerer Bloodlines", "ability/sorcerer_bloodlines"]
];

type Data = typeof bloodlines;

type Params = { id?: keyof Data };

const SorcererBloodlinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, bloodlines);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"sorcerer-bloodline--" + id}
		topLink={["Sorcerer Bloodlines", "ability/sorcerer_bloodlines"]}
	>{jsx}</BasicPage>;
};

export default SorcererBloodlinePage;
