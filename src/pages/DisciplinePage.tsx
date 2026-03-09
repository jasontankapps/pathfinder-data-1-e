import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import disciplines from './subpages/_GEN_discipline';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof disciplines;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Psychic Disciplines", "ability/disciplines"];

const DiscliplinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, disciplines);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/discipline/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default DiscliplinePage;
