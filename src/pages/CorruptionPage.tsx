import { useParams } from 'wouter';
import getItem from '../components/getItem';
import corruptions from './subpages/__corruption';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof corruptions;

type Params = { id?: keyof Data };

const CorruptionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, corruptions);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/corruption/" + id}
		topLink={["Corruption (Rules)", "rule/corruption"]}
	>{jsx}</BasicPage>;
};

export default CorruptionPage;
