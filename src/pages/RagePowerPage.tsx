import { useParams } from 'wouter';
import getItem from '../components/getItem';
import rage_powers from './subpages/__ragepower';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './Page.css';

const tL: Hierarchy = ["Rage Powers", "ability/rage_powers"];

type Data = typeof rage_powers;

type Params = { id?: keyof Data };

const RagePowerPage: React.FC = () => {
	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, topLink } = getItem<Data>(id, rage_powers);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={`/ragepower/${id}`}
		topLink={topLink || tL}
	>{jsx}</BasicPage>;
};

export default RagePowerPage;
