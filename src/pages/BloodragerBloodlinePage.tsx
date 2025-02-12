import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import bloodlines from './subpages/__bloodragerbloodline';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof bloodlines;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Bloodrager Bloodlines", "ability/bloodrager_bloodlines"];

const BloodragerBloodlinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id as keyof Data, bloodlines);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/bloodragerbloodline/" + id}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default BloodragerBloodlinePage;
