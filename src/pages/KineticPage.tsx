import { useParams } from 'wouter';
import getItem from '../components/getItem';
import talents from './subpages/__kinetic';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof talents;

type Params = { id?: keyof Data };

const KineticPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, talents);

	const topLink = subhierarchy.length ? subhierarchy[0] : undefined;

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/kinetic/" + id}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default KineticPage;
