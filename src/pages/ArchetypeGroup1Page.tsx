import { useParams } from 'wouter';
import alchemist from './subpages/__arc-alchemist';
import antipaladin from './subpages/__arc-antipaladin';
import arcanist from './subpages/__arc-arcanist';
import barbarian from './subpages/__arc-barbarian';
import medium from './subpages/__arc-medium';
import './Page.css';

/*
	alchemist: [1, "Alchemist"], //63
	antipaladin: [1, "Antipaladin"], //9
	arcanist: [1, "Arcanist"], //15
	barbarian: [1, "Barbarian"], //42; conflicts with vigilante
	medium: [1, "Medium"], //15
*/

const archetypes = {
	alchemist,
	antipaladin,
	arcanist,
	barbarian,
	medium
};

type Data = typeof alchemist | typeof antipaladin | typeof arcanist | typeof barbarian | typeof medium;

type Classes = keyof typeof archetypes;

type Params = { id?: keyof Data, parent?: Classes };

const ArchetypeGroup1Page: React.FC = () => {

	const { id = "not_found", parent = "barbarian" } = useParams<Params>();

	const base = archetypes[parent] || archetypes.barbarian;

	const Page = base[id];

	return <Page />;
};

export default ArchetypeGroup1Page;
