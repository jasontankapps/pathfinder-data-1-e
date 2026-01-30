import { useParams } from 'wouter';
import inquisitor from './subpages/__arc-inquisitor';
import kineticist from './subpages/__arc-kineticist';
import magus from './subpages/__arc-magus';
import mesmerist from './subpages/__arc-mesmerist';
import ninja from './subpages/__arc-ninja';
import wizard from './subpages/__arc-wizard';
import './Page.css';

/*
	inquisitor: [5, "Inquisitor"], //38; conflicts with familiar, investigator, ranger
	kineticist: [5, "Kineticist"], //19
	magus: [5, "Magus"], //31
	mesmerist: [5, "Mesmerist"], //21
	ninja: [5, "Ninja"], //18
	wizard: [5, "Wizard"], //10; conflicts with cleric, bloodrager
*/

const archetypes = {
	inquisitor,
	kineticist,
	magus,
	mesmerist,
	ninja,
	wizard
};

type Data = typeof inquisitor | typeof kineticist | typeof magus | typeof mesmerist | typeof ninja | typeof wizard;

type Classes = keyof typeof archetypes;

type Params = { id?: keyof Data, parent?: Classes };

const ArchetypeGroup5Page: React.FC = () => {

	const { id = "not_found", parent = "wizard" } = useParams<Params>();

	const base = archetypes[parent] || archetypes.wizard;

	const Page = base[id] || base.not_found;

	return <Page />;
};

export default ArchetypeGroup5Page;
