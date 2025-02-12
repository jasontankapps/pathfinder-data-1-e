import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import bloodlines from './subpages/__sorcererbloodline';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof bloodlines;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Sorcerer Bloodlines", "ability/sorcerer_bloodlines"];

const SorcererBloodlinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, bloodlines);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/sorcererbloodline/" + id}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default SorcererBloodlinePage;
