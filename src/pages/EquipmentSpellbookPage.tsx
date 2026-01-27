import { useParams } from 'wouter';
import equipment from './subpages/__eq-spellbook';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpellbookPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? equipment[id] || equipment.not_found : equipment.not_found;

	return <Page />;
};

export default EquipmentSpellbookPage;
