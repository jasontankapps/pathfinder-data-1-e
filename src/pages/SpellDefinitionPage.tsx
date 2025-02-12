import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import defs from './subpages/__spelldef';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof defs;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Spell Definitions", "main/spell_definitions"];

const SpellDefPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, defs);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/spelldef/" + id}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default SpellDefPage;
