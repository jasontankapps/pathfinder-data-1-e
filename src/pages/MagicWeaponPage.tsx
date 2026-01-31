import { useParams } from 'wouter';
import magicweapon1 from './subpages/__magic-weapon01';
import magicweapon2 from './subpages/__magic-weapon02';
import './Page.css';

type Params = { id?: string };

const MagicWeaponPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = magicweapon1[id] || magicweapon2[id] || magicweapon1.not_found;

	return <Page />;

};

export default MagicWeaponPage;
