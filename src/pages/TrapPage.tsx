import { useParams } from 'wouter';
import getItem from '../components/getItem';
import traps from './subpages/__trap';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["All Rules", "main/rules"],
	["Environment", "rule/environment"],
	["Traps (Rules)", "rule/traps"],
	["Sample Traps", "rule/sample_traps"]
];

type Data = typeof traps;

type Params = { id?: keyof Data };

const trapLink: [string, string] = ["Sample Traps", "rule/sample_traps"];

const TrapPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, traps);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"trap--" + id}
		topLink={trapLink}
	>{jsx}</BasicPage>;
};

export default TrapPage;
