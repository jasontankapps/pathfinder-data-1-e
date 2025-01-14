import { useParams, useLocation } from 'wouter';
import getItem from '../components/getItem';
import powers from './subpages/__ragepower';
import stances from './subpages/__stanceragepower';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy1: HierarchyArray = [
	["Classes", "main/classes"],
	["Barbarian", "class/barbarian"],
	["Rage Powers", "ability/rage_powers"]
];

const hierarchy2: HierarchyArray = [
	["Classes", "main/classes"],
	["Unchained Barbarian", "class/unchained_barbarian"],
	["Stance Rage Powers", "ability/stance_rage_powers"]
];

const rage_powers = {...powers, ...stances};

type Data = typeof rage_powers;

type Params = { id?: keyof Data };

const RagePowerPage: React.FC = () => {
	const [ path ] = useLocation();
	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, rage_powers);

	const m = path.match(/stance/);
	const hierarchy = m ? hierarchy2 : hierarchy1;

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={`/${m ? "stance" : ""}ragepower/${id}`}
		topLink={(m ? hierarchy2 : hierarchy1)[2]}
	>{jsx}</BasicPage>;
};

export default RagePowerPage;
