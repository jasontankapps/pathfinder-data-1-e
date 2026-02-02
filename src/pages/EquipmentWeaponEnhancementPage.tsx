import { useParams } from 'wouter';
import Equipment, { test } from './subpages/__eq-weaponenh';
import './Page.css';

type Params = { id?: string };

const EquipmentWeaponEnhancementsPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Equipment id={test(id) ? id : "not_found"} />;
};

export default EquipmentWeaponEnhancementsPage;
