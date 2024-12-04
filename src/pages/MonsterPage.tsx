import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_monster.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const MonsterGroup01Page = lazy(() => import("./MonsterGroup01Page"));
const MonsterGroup02Page = lazy(() => import("./MonsterGroup02Page"));
const MonsterGroup03Page = lazy(() => import("./MonsterGroup03Page"));
const MonsterGroup04Page = lazy(() => import("./MonsterGroup04Page"));
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
const MonsterGroup30Page = lazy(() => import("./MonsterGroup30Page"));
const MonsterGroup31Page = lazy(() => import("./MonsterGroup31Page"));
const MonsterGroup32Page = lazy(() => import("./MonsterGroup32Page"));
const MonsterGroup33Page = lazy(() => import("./MonsterGroup33Page"));
const MonsterGroup34Page = lazy(() => import("./MonsterGroup34Page"));
const MonsterGroup35Page = lazy(() => import("./MonsterGroup35Page"));
const MonsterGroup36Page = lazy(() => import("./MonsterGroup36Page"));
const MonsterGroup37Page = lazy(() => import("./MonsterGroup37Page"));
const MonsterGroup38Page = lazy(() => import("./MonsterGroup38Page"));
const MonsterGroup39Page = lazy(() => import("./MonsterGroup39Page"));
const MonsterGroup40Page = lazy(() => import("./MonsterGroup40Page"));
const MonsterGroup41Page = lazy(() => import("./MonsterGroup41Page"));
const MonsterUniqueGroup01Page = lazy(() => import("./MonsterUniqueGroup01Page"));
const MonsterUniqueGroup02Page = lazy(() => import("./MonsterUniqueGroup02Page"));
const MonsterUniqueGroup03Page = lazy(() => import("./MonsterUniqueGroup03Page"));
const MonsterUniqueGroup04Page = lazy(() => import("./MonsterUniqueGroup04Page"));
const MonsterMythicGroup01Page = lazy(() => import("./MonsterMythicGroup01Page"));
const MonsterMythicGroup02Page = lazy(() => import("./MonsterMythicGroup02Page"));

const pages = [
	({id}: {id: string}) => <MonsterGroup01Page id={id} />,
	({id}: {id: string}) => <MonsterGroup02Page id={id} />,
	({id}: {id: string}) => <MonsterGroup03Page id={id} />,
	({id}: {id: string}) => <MonsterGroup04Page id={id} />,
	({id}: {id: string}) => <MonsterGroup05Page id={id} />,
	({id}: {id: string}) => <MonsterGroup06Page id={id} />,
	({id}: {id: string}) => <MonsterGroup07Page id={id} />,
	({id}: {id: string}) => <MonsterGroup08Page id={id} />,
	({id}: {id: string}) => <MonsterGroup09Page id={id} />,
	({id}: {id: string}) => <MonsterGroup10Page id={id} />,
	({id}: {id: string}) => <MonsterGroup11Page id={id} />,
	({id}: {id: string}) => <MonsterGroup12Page id={id} />,
	({id}: {id: string}) => <MonsterGroup13Page id={id} />,
	({id}: {id: string}) => <MonsterGroup14Page id={id} />,
	({id}: {id: string}) => <MonsterGroup15Page id={id} />,
	({id}: {id: string}) => <MonsterGroup16Page id={id} />,
	({id}: {id: string}) => <MonsterGroup17Page id={id} />,
	({id}: {id: string}) => <MonsterGroup18Page id={id} />,
	({id}: {id: string}) => <MonsterGroup19Page id={id} />,
	({id}: {id: string}) => <MonsterGroup20Page id={id} />,
	({id}: {id: string}) => <MonsterGroup21Page id={id} />,
	({id}: {id: string}) => <MonsterGroup22Page id={id} />,
	({id}: {id: string}) => <MonsterGroup23Page id={id} />,
	({id}: {id: string}) => <MonsterGroup24Page id={id} />,
	({id}: {id: string}) => <MonsterGroup25Page id={id} />,
	({id}: {id: string}) => <MonsterGroup26Page id={id} />,
	({id}: {id: string}) => <MonsterGroup27Page id={id} />,
	({id}: {id: string}) => <MonsterGroup28Page id={id} />,
	({id}: {id: string}) => <MonsterGroup29Page id={id} />,
	({id}: {id: string}) => <MonsterGroup30Page id={id} />,
	({id}: {id: string}) => <MonsterGroup31Page id={id} />,
	({id}: {id: string}) => <MonsterGroup32Page id={id} />,
	({id}: {id: string}) => <MonsterGroup33Page id={id} />,
	({id}: {id: string}) => <MonsterGroup34Page id={id} />,
	({id}: {id: string}) => <MonsterGroup35Page id={id} />,
	({id}: {id: string}) => <MonsterGroup36Page id={id} />,
	({id}: {id: string}) => <MonsterGroup37Page id={id} />,
	({id}: {id: string}) => <MonsterGroup38Page id={id} />,
	({id}: {id: string}) => <MonsterGroup39Page id={id} />,
	({id}: {id: string}) => <MonsterGroup40Page id={id} />,
	({id}: {id: string}) => <MonsterGroup41Page id={id} />,
	({id}: {id: string}) => <MonsterUniqueGroup01Page id={id} />,
	({id}: {id: string}) => <MonsterUniqueGroup02Page id={id} />,
	({id}: {id: string}) => <MonsterUniqueGroup03Page id={id} />,
	({id}: {id: string}) => <MonsterUniqueGroup04Page id={id} />,
	({id}: {id: string}) => <MonsterMythicGroup01Page id={id} />,
	({id}: {id: string}) => <MonsterMythicGroup02Page id={id} />,
]

const MonsterPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "main"} /></Suspense>;

};

export default MonsterPage;
