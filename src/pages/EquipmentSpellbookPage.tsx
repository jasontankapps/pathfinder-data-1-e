import { useParams } from 'wouter';
import equipment from './subpages/__eq-spellbook';
import './Page.css';

type Params = { id?: string };

const EquipmentSpellbookPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = equipment[id] || equipment.not_found;

	return <Page />;
};

export default EquipmentSpellbookPage;
