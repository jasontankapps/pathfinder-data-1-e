import { useParams } from 'wouter';
import Eqweapon1, { test as test1 } from './subpages/__eq-weapon01';
import Eqweapon2, { test as test2 } from './subpages/__eq-weapon02';
import './Page.css';

type Params = { id?: string };

const EquipmentWeaponPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Eqweapon1 id={id} />;
	}
	if(test2(id)) {
		return <Eqweapon2 id={id} />;
	}

	return <Eqweapon1 id="not_found" />;

};

export default EquipmentWeaponPage;
