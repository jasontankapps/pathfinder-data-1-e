import { useParams } from 'wouter';
import getItem from '../components/getItem';
import spirits from './subpages/__spirit';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './Page.css';

type Data = typeof spirits;

type Params = { id?: keyof Data };

const tL: Hierarchy = ["Medium Spirits", "ability/spirits"];

const MediumSpiritPage: React.FC = () => {
	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, topLink } = getItem<Data>(id, spirits);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/spirit/" + id}
		topLink={topLink || tL}
	>{jsx}</BasicPage>;
};

export default MediumSpiritPage;
