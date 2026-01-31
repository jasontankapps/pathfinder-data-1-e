import { useParams } from 'wouter';
import investigator from './subpages/__arc-investigator';
import monk from './subpages/__arc-monk';
import occultist from './subpages/__arc-occultist';
import warpriest from './subpages/__arc-warpriest';
import unchained_summoner from './subpages/__arc-unchained_summoner';
import './Page.css';

/*
	investigator: [6, "Investigator"], //37; conflicts with familiar, inquisitor, ranger
	monk: [6, "Monk"], //70
	occultist: [6, "Occultist"], //20; conflicts with summoner
	warpriest: [6, "Warpriest"], //18
	unchained_summoner: [6, "Unchained Summoner"], //10; conflicts with summoner
*/

const archetypes = {
	investigator,
	monk,
	occultist,
	warpriest,
	unchained_summoner
};

type Classes = keyof typeof archetypes;

type Params = { id?: string, parent?: Classes };

const ArchetypeGroup6Page: React.FC = () => {

	const { id = "not_found", parent = "unchained_summoner" } = useParams<Params>();

	const base = archetypes[parent] || archetypes.unchained_summoner;

	const Page = base[id] || base.not_found;

	return <Page />;
};

export default ArchetypeGroup6Page;
