import { useParams } from 'wouter';
import getItem from '../components/getItem';
import disciplines from './subpages/__discipline';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof disciplines;

type Params = { id?: keyof Data };

const DiscliplinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, disciplines);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/discipline/" + id}
		topLink={["Psychic Disciplines", "ability/disciplines"]}
	>{jsx}</BasicPage>;
};

export default DiscliplinePage;
