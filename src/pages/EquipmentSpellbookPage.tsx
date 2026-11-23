import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import equipment from './subpages/_GEN_eq-spellbook';
import BasicPage from './BasicPage';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Spellbooks", "main/equipment_spellbooks"];

const EquipmentSpellbookPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, className: cn, notBookmarkable } = getItem<Data>(id, equipment);

	const className = cn ? "simple " + cn : cn;

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/eq-spellbook/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
		className={className}
	>{jsx}</BasicPage>;
};

export default EquipmentSpellbookPage;
