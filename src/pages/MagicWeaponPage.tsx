import { useParams } from 'wouter';
import magicweapon1 from './subpages/__magic-weapon01';
import magicweapon2 from './subpages/__magic-weapon02';
import './Page.css';

type Data = typeof magicweapon1 | typeof magicweapon2;

type Params = { id?: keyof Data };

const MagicWeaponPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id && (magicweapon1[id] || magicweapon2[id]) || magicweapon1.not_found;

	return <Page />;

};

export default MagicWeaponPage;
