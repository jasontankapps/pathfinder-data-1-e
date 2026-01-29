import { useParams } from 'wouter';
import eqweapon1 from './subpages/__eq-weapon01';
import eqweapon2 from './subpages/__eq-weapon02';
import './Page.css';

type Data = typeof eqweapon1 | typeof eqweapon2;

type Params = { id?: keyof Data };

const EquipmentWeaponPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = eqweapon1[id] || eqweapon2[id] || eqweapon1.not_found;

	return <Page />;

};

export default EquipmentWeaponPage;
