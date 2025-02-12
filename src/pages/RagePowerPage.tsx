import { useParams, useLocation } from 'wouter';
import getItem from '../components/getItem';
import powers from './subpages/__ragepower';
import stances from './subpages/__stanceragepower';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './Page.css';

const top1: Hierarchy = ["Rage Powers", "ability/rage_powers"];
const top2: Hierarchy = ["Stance Rage Powers", "ability/stance_rage_powers"];

const rage_powers = {...powers, ...stances};

type Data = typeof rage_powers;

type Params = { id?: keyof Data };

const RagePowerPage: React.FC = () => {
	const [ path ] = useLocation();
	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, rage_powers);

	const m = path.match(/stance/);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={`/${m ? "stance" : ""}ragepower/${id}`}
		topLink={m ? top2 : top1}
	>{jsx}</BasicPage>;
};

export default RagePowerPage;
