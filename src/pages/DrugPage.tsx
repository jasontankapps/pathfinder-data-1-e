import { useParams } from 'wouter';
import getItem from '../components/getItem';
import drugs from './subpages/__drug';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof drugs;

type Params = { id?: keyof Data };

const DrugPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, drugs);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/drug/" + id}
		topLink={["Drugs", "main/drugs"]}
	>{jsx}</BasicPage>;
};

export default DrugPage;
