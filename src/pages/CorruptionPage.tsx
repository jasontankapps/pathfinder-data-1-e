import { useParams } from 'wouter';
import getItem from '../components/getItem';
import corruptions from './subpages/__corruption';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Rules", "main/rules"],
	["GM: Specific Campaigns", "rule/gm_specific_campaigns"],
	["Horror Rules", "rule/horror_rules"],
	["Corruption (Rules)", "rule/corruption"]
];

type Data = typeof corruptions;

type Params = { id?: keyof Data };

const CorruptionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, corruptions);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/corruption/" + id}
		topLink={["Corruption (Rules)", "rule/corruption"]}
	>{jsx}</BasicPage>;
};

export default CorruptionPage;
