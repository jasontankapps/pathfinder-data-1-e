import { useParams } from 'wouter';
import familiar from './subpages/__arc-familiar';
import fighter from './subpages/__arc-fighter';
import gunslinger from './subpages/__arc-gunslinger';
import hunter from './subpages/__arc-hunter';
import psychic from './subpages/__arc-psychic';
import './Page.css';

/*
	familiar: [4, "Familiar"], //20; conflicts with cavalier, bard, inquisitor, investigator, ranger
	fighter: [4, "Fighter"], //67; conflicts with ranger, skald
	gunslinger: [4, "Gunslinger"], //23; conflicts with bard
	hunter: [4, "Hunter"], //21; conflicts with paladin, rogue
	psychic: [4, "Psychic"], //8
*/

const archetypes = {
	familiar,
	fighter,
	gunslinger,
	hunter,
	psychic
};

type Data = typeof familiar | typeof fighter | typeof gunslinger | typeof hunter | typeof psychic;

type Classes = keyof typeof archetypes;

type Params = { id?: keyof Data, parent?: Classes };

const ArchetypeGroup4Page: React.FC = () => {

	const { id = "not_found", parent = "psychic" } = useParams<Params>();

	const base = archetypes[parent] || archetypes.psychic;

	const Page = base[id] || base.not_found;

	return <Page />;
};

export default ArchetypeGroup4Page;
