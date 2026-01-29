import { useParams } from 'wouter';
import bard from './subpages/__arc-bard';
import bloodrager from './subpages/__arc-bloodrager';
import brawler from './subpages/__arc-brawler';
import cavalier from './subpages/__arc-cavalier';
import './Page.css';

/*
	bard: [2, "Bard"], //73; conflicts with companion, familiar, gunslinger, rogue
	bloodrager: [2, "Bloodrager"], //19; conflicts with shifter, wizard
	brawler: [2, "Brawler"], // 19
	cavalier: [2, "Cavalier"], //37; conflicts with companion, familiar, swashbuckler
*/

const archetypes = {
	bard,
	bloodrager,
	brawler,
	cavalier
};

type Data = typeof bard | typeof bloodrager | typeof brawler | typeof cavalier;

type Classes = keyof typeof archetypes;

type Params = { id?: keyof Data, parent?: Classes };

const ArchetypeGroup2Page: React.FC = () => {

	const { id = "not_found", parent = "brawler" } = useParams<Params>();

	const base = archetypes[parent] || archetypes.brawler;

	const Page = base[id];

	return <Page />;
};

export default ArchetypeGroup2Page;
