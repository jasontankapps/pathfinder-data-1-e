import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_npc.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const NPCGroup1Page = lazy(() => import("./NPCGroup1Page"));
const NPCGroup2Page = lazy(() => import("./NPCGroup2Page"));
const NPCGroup3Page = lazy(() => import("./NPCGroup3Page"));
const NPCGroup4Page = lazy(() => import("./NPCGroup4Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><NPCGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><NPCGroup2Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><NPCGroup3Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><NPCGroup4Page id={id} /></Suspense>,
]

const NPCPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default NPCPage;
