import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-spellbook';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpellbookPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/eq-spellbook/" + id}
		topLink={["Spellbooks", "main/equipment_spellbook"]}
	>{jsx}</BasicPage>;
};

export default EquipmentSpellbookPage;
