import { useParams } from 'wouter';
import getItem from '../components/getItem';
import umr from './subpages/__umr';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof umr;

type Params = { id?: keyof Data };

const UMRPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, umr);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/umr/" + id}
		topLink={["Universal Monster Rules", "main/umr"]}
	>{jsx}</BasicPage>;
};

export default UMRPage;
