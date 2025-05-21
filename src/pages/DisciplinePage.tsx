import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import disciplines from './subpages/__discipline';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof disciplines;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Psychic Disciplines", "ability/disciplines"];

const DiscliplinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, disciplines);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/discipline/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default DiscliplinePage;
