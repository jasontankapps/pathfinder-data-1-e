import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import arcana from './subpages/__arcana';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof arcana;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Magus Arcana", "ability/magus_arcana"];

const ArcanaPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id as keyof Data, arcana);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/arcana/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ArcanaPage;
