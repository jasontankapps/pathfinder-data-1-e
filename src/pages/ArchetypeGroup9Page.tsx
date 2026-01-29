import { useParams } from 'wouter';
import slayer from './subpages/__arc-slayer';
import spiritualist from './subpages/__arc-spiritualist';
import summoner from './subpages/__arc-summoner';
import vigilante from './subpages/__arc-vigilante';
import witch from './subpages/__arc-shifter';
import './Page.css';

/*
	slayer: [9, "Slayer"], //26; conflicts with rogue
	spiritualist: [9, "Spiritualist"], //24; conflicts with summoner
	summoner: [9, "Summoner"], //22; conflicts with unchained summoner, occultist, spiritualist
	vigilante: [9, "Vigilante"], //28; conflicts with barbarian
	witch: [9, "Witch"], //43
*/

const archetypes = {
	slayer,
	spiritualist,
	summoner,
	vigilante,
	witch
};

type Data = typeof slayer | typeof spiritualist | typeof summoner | typeof vigilante | typeof witch;

type Classes = keyof typeof archetypes;

type Params = { id?: keyof Data, parent?: Classes };

const ArchetypeGroup2Page: React.FC = () => {

	const { id = "not_found", parent = "summoner" } = useParams<Params>();

	const base = archetypes[parent] || archetypes.summoner;

	const Page = base[id];

	return <Page />;
};

export default ArchetypeGroup2Page;
