import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import psychic_implements from './subpages/_GEN_implement';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof psychic_implements;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Psychic Implements", "ability/implements"];

const ImplementPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, psychic_implements);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/implement/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ImplementPage;
