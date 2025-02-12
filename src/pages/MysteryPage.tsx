import { useParams } from 'wouter';
import getItem from '../components/getItem';
import mysteries from './subpages/__mystery';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof mysteries;

type Params = { id?: keyof Data };

const MysteryPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, mysteries);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/mystery/" + id}
		topLink={["Oracle Mysteries", "ability/mysteries"]}
	>{jsx}</BasicPage>;
};

export default MysteryPage;
