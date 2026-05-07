import { ReactNode, lazy } from 'react';
import { useParams } from 'wouter';
import { GenStrict } from '../types';
import './css/Page.css';

export interface ArchetypeProps {
	id: string,
	parent: string,
	classTitle: string
};

const ArchetypeGroup1Page = lazy(() => import("./ArchetypeGroup1Page"));
const ArchetypeGroup2Page = lazy(() => import("./ArchetypeGroup2Page"));
const ArchetypeGroup3Page = lazy(() => import("./ArchetypeGroup3Page"));
const ArchetypeGroup4Page = lazy(() => import("./ArchetypeGroup4Page"));
const ArchetypeGroup5Page = lazy(() => import("./ArchetypeGroup5Page"));
const ArchetypeGroup6Page = lazy(() => import("./ArchetypeGroup6Page"));
const ArchetypeGroup7Page = lazy(() => import("./ArchetypeGroup7Page"));
const ArchetypeGroup8Page = lazy(() => import("./ArchetypeGroup8Page"));
const ArchetypeGroup9Page = lazy(() => import("./ArchetypeGroup9Page"));
const ArchetypeGroup10Page = lazy(() => import("./ArchetypeGroup10Page"));
const ArchetypeGroup11Page = lazy(() => import("./ArchetypeGroup11Page"));
const ArchetypeGroup12Page = lazy(() => import("./ArchetypeGroup12Page"));
const ArchetypeGroup13Page = lazy(() => import("./ArchetypeGroup13Page"));
const ArchetypeGroup14Page = lazy(() => import("./ArchetypeGroup14Page"));
const ArchetypeGroup15Page = lazy(() => import("./ArchetypeGroup15Page"));
const ArchetypeGroup16Page = lazy(() => import("./ArchetypeGroup16Page"));
const ArchetypeGroup17Page = lazy(() => import("./ArchetypeGroup17Page"));
const ArchetypeGroup18Page = lazy(() => import("./ArchetypeGroup18Page"));
const ArchetypeGroup19Page = lazy(() => import("./ArchetypeGroup19Page"));
const ArchetypeGroup20Page = lazy(() => import("./ArchetypeGroup20Page"));
const ArchetypeGroup21Page = lazy(() => import("./ArchetypeGroup21Page"));
const ArchetypeGroup22Page = lazy(() => import("./ArchetypeGroup22Page"));
const ArchetypeGroup23Page = lazy(() => import("./ArchetypeGroup23Page"));
const ArchetypeGroup24Page = lazy(() => import("./ArchetypeGroup24Page"));
const ArchetypeGroup25Page = lazy(() => import("./ArchetypeGroup25Page"));
const ArchetypeGroup26Page = lazy(() => import("./ArchetypeGroup26Page"));
const ArchetypeGroup27Page = lazy(() => import("./ArchetypeGroup27Page"));
const ArchetypeGroup28Page = lazy(() => import("./ArchetypeGroup28Page"));
const ArchetypeGroup29Page = lazy(() => import("./ArchetypeGroup29Page"));

interface ArchGroupPageProps {id: string, parent: string, classTitle: string};

const pages: ((x: ArchGroupPageProps) => ReactNode)[] = [
	({id, parent, classTitle}) => <ArchetypeGroup1Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup2Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup3Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup4Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup5Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup6Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup7Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup8Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup9Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup10Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup11Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup12Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup13Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup14Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup15Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup16Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup17Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup18Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup19Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup20Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup21Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup22Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup23Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup24Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup25Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup26Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup27Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup28Page id={id} parent={parent} classTitle={classTitle} />,
	({id, parent, classTitle}) => <ArchetypeGroup29Page id={id} parent={parent} classTitle={classTitle} />
];

const classes: GenStrict<string, [number, string]> = {
	samurai: [1, "Samurai"],

	summoner: [2, "Summoner"], // conflicts with unchained summoner, occultist, spiritualist
	swashbuckler: [2, "Swashbuckler"], // conflicts with cavalier

	skald: [3, "Skald"], // conflicts with fighter
	warpriest: [3, "Warpriest"],

	occultist: [4, "Occultist"], // conflicts with summoner
	oracle: [4, "Oracle"], // conflicts with sorcerer

	companion: [5, "Companion"], // conflicts with cavalier, bard
	bloodrager: [5, "Bloodrager"], // conflicts with shifter, wizard

	witch: [6, "Witch"],

	rogue: [7, "Rogue"], // conflicts with bard, slayer, hunter
	sorcerer: [7, "Sorcerer"], // conflicts with oracle
	unchained_summoner: [7, "Unchained Summoner"], // conflicts with summoner

	brawler: [8, "Brawler"],
	mesmerist: [8, "Mesmerist"],

	medium: [9, "Medium"],
	ninja: [9, "Ninja"],

	psychic: [10, "Psychic"],
	arcanist: [10, "Arcanist"],

	kineticist: [11, "Kineticist"],
	slayer: [11, "Slayer"], // conflicts with rogue
	antipaladin: [11, "Antipaladin"],

	investigator: [12, "Investigator"], // conflicts with familiar, inquisitor, ranger

	shaman: [13, "Shaman"],
	shifter: [13, "Shifter"], // conflicts with bloodrager

	vigilante: [14, "Vigilante"], // conflicts with barbarian
	familiar: [14, "Familiar"], // conflicts with cavalier, bard, inquisitor, investigator, ranger
	wizard: [14, "Wizard"], // conflicts with cleric, bloodrager

	bard: [15, "Bard"], // conflicts with companion, familiar, gunslinger, rogue

	alchemist: [16, "Alchemist"],

	barbarian: [17, "Barbarian"], // conflicts with vigilante

	druid: [18, "Druid"],

	fighter: [19, "Fighter"], // conflicts with ranger, skald

	cleric: [20, "Cleric"], // conflicts with wizard

	cavalier: [21, "Cavalier"], // conflicts with companion, familiar, swashbuckler

	inquisitor: [22, "Inquisitor"], // conflicts with familiar, investigator, ranger

	gunslinger: [23, "Gunslinger"], // conflicts with bard

	ranger: [24, "Ranger"], // conflicts with fighter, familiar, inquisitor, investigator

	spiritualist: [25, "Spiritualist"], // conflicts with summoner

	hunter: [26, "Hunter"], // conflicts with paladin, rogue

	magus: [27, "Magus"],

	monk: [28, "Monk"],

	paladin: [29, "Paladin"], // conflicts with hunter
};

type Params = { id?: string, parent?: string };

const ArchetypePage: React.FC = () => {

	const { id = "not_found", parent = "ninja" } = useParams<Params>();

	const [num, classTitle] = classes[parent] || classes.ninja;

	const Page = pages[num - 1];

	return <Page id={id} parent={parent} classTitle={classTitle} />;
};

export default ArchetypePage;
