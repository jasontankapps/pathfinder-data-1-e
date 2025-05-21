import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import spirits from './subpages/__shamanspirit';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof spirits;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Shaman Spirits", "ability/shaman_spirits"];

const ShamanSpiritPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, spirits);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/shamanspirit/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default ShamanSpiritPage;
