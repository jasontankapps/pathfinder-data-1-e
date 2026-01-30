import { useParams } from 'wouter';
import cleric from './subpages/__arc-cleric';
import companion from './subpages/__arc-companion';
import druid from './subpages/__arc-druid';
import shaman from './subpages/__arc-shaman';
import './Page.css';

/*
	cleric: [3, "Cleric"], //35; conflicts with wizard
	companion: [3, "Companion"], //21; conflicts with cavalier, bard
	druid: [3, "Druid"], //75
	shaman: [3, "Shaman"], //17
*/

const archetypes = {
	cleric,
	companion,
	druid,
	shaman
};

type Data = typeof cleric | typeof companion | typeof druid | typeof shaman;

type Classes = keyof typeof archetypes;

type Params = { id?: keyof Data, parent?: Classes };

const ArchetypeGroup3Page: React.FC = () => {

	const { id = "not_found", parent = "shaman" } = useParams<Params>();

	const base = archetypes[parent] || archetypes.shaman;

	const Page = base[id] || base.not_found;

	return <Page />;
};

export default ArchetypeGroup3Page;
