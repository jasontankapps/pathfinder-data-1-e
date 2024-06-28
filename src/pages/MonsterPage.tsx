import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_monster.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const MonsterGroup01Page = lazy(() => import("./MonsterGroup01UniquePage"));
const MonsterGroup02Page = lazy(() => import("./MonsterGroup02UniquePage"));
const MonsterGroup03Page = lazy(() => import("./MonsterGroup03UniquePage"));
const MonsterGroup04Page = lazy(() => import("./MonsterGroup04MythicPage"));
const MonsterGroup05Page = lazy(() => import("./MonsterGroup05Page"));
const MonsterGroup06Page = lazy(() => import("./MonsterGroup06Page"));
const MonsterGroup07Page = lazy(() => import("./MonsterGroup07Page"));
const MonsterGroup08Page = lazy(() => import("./MonsterGroup08Page"));
const MonsterGroup09Page = lazy(() => import("./MonsterGroup09Page"));
const MonsterGroup10Page = lazy(() => import("./MonsterGroup10Page"));
const MonsterGroup11Page = lazy(() => import("./MonsterGroup11Page"));
const MonsterGroup12Page = lazy(() => import("./MonsterGroup12Page"));
const MonsterGroup13Page = lazy(() => import("./MonsterGroup13Page"));
const MonsterGroup14Page = lazy(() => import("./MonsterGroup14Page"));
const MonsterGroup15Page = lazy(() => import("./MonsterGroup15Page"));
const MonsterGroup16Page = lazy(() => import("./MonsterGroup16Page"));
const MonsterGroup17Page = lazy(() => import("./MonsterGroup17Page"));
const MonsterGroup18Page = lazy(() => import("./MonsterGroup18Page"));
const MonsterGroup19Page = lazy(() => import("./MonsterGroup19Page"));
const MonsterGroup20Page = lazy(() => import("./MonsterGroup20Page"));
const MonsterGroup21Page = lazy(() => import("./MonsterGroup21Page"));
const MonsterGroup22Page = lazy(() => import("./MonsterGroup22Page"));
const MonsterGroup23Page = lazy(() => import("./MonsterGroup23Page"));
const MonsterGroup24Page = lazy(() => import("./MonsterGroup24Page"));
const MonsterGroup25Page = lazy(() => import("./MonsterGroup25Page"));
const MonsterGroup26Page = lazy(() => import("./MonsterGroup26Page"));
const MonsterGroup27Page = lazy(() => import("./MonsterGroup27Page"));
const MonsterGroup28Page = lazy(() => import("./MonsterGroup28Page"));
const MonsterGroup29Page = lazy(() => import("./MonsterGroup29Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup01Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup02Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup03Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup04Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup05Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup06Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup07Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup08Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup09Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup10Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup11Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup12Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup13Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup14Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup15Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup16Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup17Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup18Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup19Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup20Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup21Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup22Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup23Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup24Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup25Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup26Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup27Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup28Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterGroup29Page id={id} /></Suspense>,
]

const MonsterPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "main"} />;

};

export default MonsterPage;
