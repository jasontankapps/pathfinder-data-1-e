import { useParams } from 'wouter';
import getItem from '../components/getItem';
import umr from './subpages/__umr';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["All Rules", "main/rules"],
	["Gamemastery", "rule/gamemastery"],
	["Monster Rules", "rule/monster_rules"],
	["Universal Monster Rules", "main/umr"]
];

type Data = typeof umr;

type Params = { id?: keyof Data };

const UMRPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, umr);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/umr/" + id}
		topLink={["Universal Monster Rules", "main/umr"]}
	>{jsx}</BasicPage>;
};

export default UMRPage;
