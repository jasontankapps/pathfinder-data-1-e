import { useLocation, useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import monster_types from './subpages/__type';
import monster_subtypes from './subpages/__subtype';
import BasicPage from './BasicPage';
import './Page.css';

const topLinkT: Hierarchy = ["Creature Types", "main/umr_types"];
const topLinkS: Hierarchy = ["Creature Subtypes", "main/umr_subtypes"];

const typings = {...monster_types, ...monster_subtypes};

type Data = typeof typings;

type Params = { id?: keyof Data };

const MonsterTypingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const [ path ] = useLocation();

	const m = path.match(/^[/](sub)?type[/]/);

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, typings);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={((m && m[0]) || "/type/") + id}
		topLink={(m && m[1]) ? topLinkS : topLinkT}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MonsterTypingPage;
