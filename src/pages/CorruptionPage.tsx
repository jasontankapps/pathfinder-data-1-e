import { useParams } from 'react-router';
import getItem from '../components/getItem';
import corruptions from './subpages/__corruption';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Gamemastering", "rule/gamemastering"],
	["Horror Rules", "rule/horror_rules"],
	["Corruption (Rules)", "rule/corruption"]
];

type Data = typeof corruptions;

type Params = { id?: keyof Data };

const CorruptionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, corruptions);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"corruption--" + id}
		topLink={["Corruption (Rules)", "rule/corruption"]}
	>{jsx}</BasicPage>;
};

export default CorruptionPage;
