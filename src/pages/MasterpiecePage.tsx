import { useParams } from 'wouter';
import getItem from '../components/getItem';
import masterpieces from './subpages/__bardicmasterpiece';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof masterpieces;

type Params = { id?: keyof Data };

const MasterpiecePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, masterpieces);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/bardicmasterpiece/" + id}
		topLink={["Bardic Masterpieces", "ability/bardic_masterpieces"]}
	>{jsx}</BasicPage>;
};

export default MasterpiecePage;
