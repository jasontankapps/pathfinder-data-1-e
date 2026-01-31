import { useParams } from 'wouter';
import oracle from './subpages/__arc-oracle';
import paladin from './subpages/__arc-paladin';
import ranger from './subpages/__arc-ranger';
import shifter from './subpages/__arc-shifter';
import './Page.css';

/*
	oracle: [7, "Oracle"], //26; conflicts with sorcerer
	paladin: [7, "Paladin"], //47; conflicts with hunter
	ranger: [7, "Ranger"], //62; conflicts with fighter, familiar, inquisitor, investigator
	shifter: [7, "Shifter"], //14; conflicts with bloodrager
*/

const archetypes = {
	oracle,
	paladin,
	ranger,
	shifter
};

type Classes = keyof typeof archetypes;

type Params = { id?: string, parent?: Classes };

const ArchetypeGroup7Page: React.FC = () => {

	const { id = "not_found", parent = "shifter" } = useParams<Params>();

	const base = archetypes[parent] || archetypes.shifter;

	const Page = base[id] || base.not_found;

	return <Page />;
};

export default ArchetypeGroup7Page;
