import { useParams } from 'wouter';
import getItem from '../components/getItem';
import inquisitions from './subpages/__inquisition';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof inquisitions;

type Params = { id?: keyof Data };

const InquisitionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, inquisitions);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/inquisition/" + id}
		topLink={["Inquisitions", "ability/inquisitions"]}
	>{jsx}</BasicPage>;
};

export default InquisitionPage;
