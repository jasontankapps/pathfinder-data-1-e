import { useParams } from 'wouter';
import rogue from './subpages/__arc-rogue';
import samurai from './subpages/__arc-samurai';
import skald from './subpages/__arc-skald';
import sorcerer from './subpages/__arc-sorcerer';
import swashbuckler from './subpages/__arc-shifter';
import './Page.css';

/*
	rogue: [8, "Rogue"], //78; conflicts with bard, slayer, hunter
	samurai: [8, "Samurai"], //7
	skald: [8, "Skald"], //26; conflicts with fighter
	sorcerer: [8, "Sorcerer"], //13; conflicts with oracle
	swashbuckler: [8, "Swashbuckler"], //20; conflicts with cavalier
*/

const archetypes = {
	rogue,
	samurai,
	skald,
	sorcerer,
	swashbuckler
};

type Data = typeof rogue | typeof samurai | typeof skald | typeof sorcerer | typeof swashbuckler;

type Classes = keyof typeof archetypes;

type Params = { id?: keyof Data, parent?: Classes };

const ArchetypeGroup2Page: React.FC = () => {

	const { id = "not_found", parent = "samurai" } = useParams<Params>();

	const base = archetypes[parent] || archetypes.samurai;

	const Page = base[id];

	return <Page />;
};

export default ArchetypeGroup2Page;
