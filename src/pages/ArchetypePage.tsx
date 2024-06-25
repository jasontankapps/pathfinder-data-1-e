import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import Loading from '../Loading';
import './Page.css';

const ArchetypeGroup0Page = lazy(() => import("./ArchetypeGroup0Page"));
const ArchetypeGroup1Page = lazy(() => import("./ArchetypeGroup1Page"));
const ArchetypeGroup2Page = lazy(() => import("./ArchetypeGroup2Page"));
const ArchetypeGroup3Page = lazy(() => import("./ArchetypeGroup3Page"));
const ArchetypeGroup4Page = lazy(() => import("./ArchetypeGroup4Page"));
const ArchetypeGroup5Page = lazy(() => import("./ArchetypeGroup5Page"));
const ArchetypeGroup6Page = lazy(() => import("./ArchetypeGroup6Page"));
const ArchetypeGroup7Page = lazy(() => import("./ArchetypeGroup7Page"));
const ArchetypeGroup8Page = lazy(() => import("./ArchetypeGroup8Page"));
const ArchetypeGroup9Page = lazy(() => import("./ArchetypeGroup9Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup0Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup2Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup3Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup4Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup5Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup6Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup7Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup8Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><ArchetypeGroup9Page id={id} /></Suspense>
];

const classes = {
	cavalier: 0,
	fighter: 0,
	investigator: 0,

	bloodrager: 1,
	gunslinger: 1,
	hunter: 1,
	monk: 1,
	samurai: 1,

	bard: 2,
	summoner: 2,
	unchained_monk: 2,
	swashbuckler: 2,

	inquisitor: 3,
	paladin: 3,
	skald: 3,
	warpriest: 3,

	cleric: 4,
	companion: 4,
	magus: 4,
	occultist: 4,
	oracle: 4,

	psychic: 5,
	ranger: 5,
	shifter: 5,
	slayer: 5,
	spiritualist: 5,

	alchemist: 6,
	antipaladin: 6,
	arcanist: 6,
	witch: 6,

	kineticist: 7,
	rogue: 7,
	shaman: 7,
	sorcerer: 7,
	unchained_summoner: 7,

	brawler: 8,
	barbarian: 8,
	familiar: 8,
	mesmerist: 8,
	vigilante: 8,

	druid: 9,
	medium: 9,
	ninja: 9,
	wizard: 9
};

type Params = { id?: string, parent?: keyof typeof classes };

const ArchetypePage: React.FC = () => {

	const { id = "unknown", parent = "ninja" } = useParams<Params>();

	const Page = pages[classes[parent]];

	return <Page id={id} />;
};

export default ArchetypePage;
