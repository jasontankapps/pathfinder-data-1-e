import { useParams } from 'wouter';
import Magicweapon1, { test as test1 } from './subpages/__magic-weapon01';
import Magicweapon2, { test as test2 } from './subpages/__magic-weapon02';
import './Page.css';

type Params = { id?: string };

const MagicWeaponPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Magicweapon1 id={id} />;
	}
	if(test2(id)) {
		return <Magicweapon2 id={id} />;
	}

	return <Magicweapon1 id="not_found" />;

};

export default MagicWeaponPage;
