import { useParams } from 'wouter';
import eqweapon1 from './subpages/__eq-weapon01';
import eqweapon2 from './subpages/__eq-weapon02';
import './Page.css';

type Data = typeof eqweapon1 | typeof eqweapon2;

type Params = { id?: keyof Data };

const EquipmentWeaponPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id && (eqweapon1[id] || eqweapon2[id]) || eqweapon1.not_found;

	return <Page />;

};

export default EquipmentWeaponPage;
