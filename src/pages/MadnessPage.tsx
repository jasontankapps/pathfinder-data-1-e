import { useParams } from 'wouter';
import getItem from '../components/getItem';
import madnesses from './subpages/__madness';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["GM: Specific Campaigns", "rule/gm_specific_campaigns"],
	["Horror Rules", "rule/horror_rules"],
	["Madness", "rule/madness"]
];

type Data = typeof madnesses;

type Params = { id?: keyof Data };

const MadnessPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, madnesses);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/madness/" + id}
		topLink={["Madness", "rule/madness"]}
	>{jsx}</BasicPage>;
};

export default MadnessPage;
