import { useParams } from 'wouter';
import getItem from '../components/getItem';
import madnesses from './subpages/__madness';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof madnesses;

type Params = { id?: keyof Data };

const MadnessPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, madnesses);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/madness/" + id}
		topLink={["Madness", "rule/madness"]}
	>{jsx}</BasicPage>;
};

export default MadnessPage;
