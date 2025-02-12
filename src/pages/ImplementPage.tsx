import { useParams } from 'wouter';
import getItem from '../components/getItem';
import psychic_implements from './subpages/__implement';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof psychic_implements;

type Params = { id?: keyof Data };

const ImplementPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, psychic_implements);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/implement/" + id}
		topLink={["Psychic Implements", "ability/implements"]}
	>{jsx}</BasicPage>;
};

export default ImplementPage;
