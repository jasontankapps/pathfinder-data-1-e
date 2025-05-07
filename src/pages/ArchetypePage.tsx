import { ReactNode, lazy } from 'react';
import { useParams } from 'wouter';
import './Page.css';

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
	({id, parent, classTitle}) => <ArchetypeGroup14Page id={id} parent={parent} classTitle={classTitle} />
];

const classes: { [key: string]: [number, string] } = {
	monk: [1, "Monk"],
	samurai: [1, "Samurai"],

	bard: [2, "Bard"], // conflicts with companion, familiar, gunslinger, rogue
	summoner: [2, "Summoner"], // conflicts with unchained summoner, occultist, spiritualist
	swashbuckler: [2, "Swashbuckler"], // conflicts with cavalier

	inquisitor: [3, "Inquisitor"], // conflicts with familiar, investigator, ranger
	paladin: [3, "Paladin"], // conflicts with hunter
	skald: [3, "Skald"], // conflicts with fighter
	warpriest: [3, "Warpriest"],

	cleric: [4, "Cleric"], // conflicts with wizard
	magus: [4, "Magus"],
	occultist: [4, "Occultist"], // conflicts with summoner
	oracle: [4, "Oracle"], // conflicts with sorcerer

	companion: [5, "Companion"], // conflicts with cavalier, bard
	ranger: [5, "Ranger"], // conflicts with fighter, familiar, inquisitor, investigator
	bloodrager: [5, "Bloodrager"], // conflicts with shifter, wizard

	alchemist: [6, "Alchemist"],
	witch: [6, "Witch"],

	rogue: [7, "Rogue"], // conflicts with bard, slayer, hunter
	sorcerer: [7, "Sorcerer"], // conflicts with oracle
	unchained_summoner: [7, "Unchained Summoner"], // conflicts with summoner

	brawler: [8, "Brawler"],
	barbarian: [8, "Barbarian"], // conflicts with vigilante
	mesmerist: [8, "Mesmerist"],

	druid: [9, "Druid"],
	medium: [9, "Medium"],
	ninja: [9, "Ninja"],

	fighter: [10, "Fighter"], // conflicts with ranger, skald
	psychic: [10, "Psychic"],
	arcanist: [10, "Arcanist"],

	cavalier: [11, "Cavalier"], // conflicts with companion, familiar, swashbuckler
	kineticist: [11, "Kineticist"],
	slayer: [11, "Slayer"], // conflicts with rogue
	antipaladin: [11, "Antipaladin"],

	investigator: [12, "Investigator"], // conflicts with familiar, inquisitor, ranger
	spiritualist: [12, "Spiritualist"], // conflicts with summoner

	gunslinger: [13, "Gunslinger"], // conflicts with bard
	shaman: [13, "Shaman"],
	hunter: [13, "Hunter"], // conflicts with paladin, rogue
	shifter: [13, "Shifter"], // conflicts with bloodrager

	vigilante: [14, "Vigilante"], // conflicts with barbarian
	familiar: [14, "Familiar"], // conflicts with cavalier, bard, inquisitor, investigator, ranger
	wizard: [14, "Wizard"], // conflicts with cleric, bloodrager

};

type Params = { id?: string, parent?: string };

const ArchetypePage: React.FC = () => {

	const { id = "not_found", parent = "ninja" } = useParams<Params>();

	const [num, classTitle] = classes[parent] || classes.ninja;

	const Page = pages[num - 1];

	return <Page id={id} parent={parent} classTitle={classTitle} />;
};

export default ArchetypePage;
