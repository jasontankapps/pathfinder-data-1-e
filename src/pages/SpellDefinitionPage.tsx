import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import defs from './subpages/_GEN_spelldef';
import BasicPage from './BasicPage';
import './css/Page.css';

type Data = typeof defs;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Spell Definitions", "main/spell_definitions"];

const SpellDefPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, defs);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/spelldef/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default SpellDefPage;
