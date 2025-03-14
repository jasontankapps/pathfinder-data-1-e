import { useParams } from 'wouter';
import getItem from '../components/getItem';
import talents from './subpages/__kinetic';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof talents;

type Params = { id?: keyof Data };

const KineticPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, topLink } = getItem<Data>(id, talents);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/kinetic/" + id}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default KineticPage;
