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
	({id, parent, classTitle}) => <ArchetypeGroup13Page id={id} parent={parent} classTitle={classTitle} />
];

const classes: { [key: string]: [number, string] } = {
	monk: [1, "Monk"],
	samurai: [1, "Samurai"],

	bard: [2, "Bard"],
	summoner: [2, "Summoner"],
	swashbuckler: [2, "Swashbuckler"],

	inquisitor: [3, "Inquisitor"],
	paladin: [3, "Paladin"],
	skald: [3, "Skald"],
	warpriest: [3, "Warpriest"],

	cleric: [4, "Cleric"],
	companion: [4, "Companion"],
	magus: [4, "Magus"],
	occultist: [4, "Occultist"],
	oracle: [4, "Oracle"],

	ranger: [5, "Ranger"],
	bloodrager: [5, "Bloodrager"],
	unchained_monk: [5, "Unchained Monk"],

	alchemist: [6, "Alchemist"],
	witch: [6, "Witch"],

	kineticist: [7, "Kineticist"],
	rogue: [7, "Rogue"],
	shaman: [7, "Shaman"],
	sorcerer: [7, "Sorcerer"],
	unchained_summoner: [7, "Unchained Summoner"],

	brawler: [8, "Brawler"],
	barbarian: [8, "Barbarian"],
	familiar: [8, "Familiar"],
	mesmerist: [8, "Mesmerist"],
	vigilante: [8, "Vigilante"],

	druid: [9, "Druid"],
	medium: [9, "Medium"],
	ninja: [9, "Ninja"],
	wizard: [9, "Wizard"],

	fighter: [10, "Fighter"],
	psychic: [10, "Psychic"],
	arcanist: [10, "Arcanist"],

	cavalier: [11, "Cavalier"],
	slayer: [11, "Slayer"],
	antipaladin: [11, "Antipaladin"],

	investigator: [12, "Investigator"],
	spiritualist: [12, "Spiritualist"],

	gunslinger: [13, "Gunslinger"],
	hunter: [13, "Hunter"],
	shifter: [13, "Shifter"]

};

type Params = { id?: string, parent?: string };

const ArchetypePage: React.FC = () => {

	const { id = "not_found", parent = "ninja" } = useParams<Params>();

	const [num, classTitle] = classes[parent] || classes.ninja;

	const Page = pages[num - 1];

	return <Page id={id} parent={parent} classTitle={classTitle} />;
};

export default ArchetypePage;
