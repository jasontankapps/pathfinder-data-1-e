import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_magic_wondrous.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const MagicWondrousGroup1Page = lazy(() => import("./MagicWondrousGroup1Page"));
const MagicWondrousGroup2Page = lazy(() => import("./MagicWondrousGroup2Page"));
const MagicWondrousGroup3Page = lazy(() => import("./MagicWondrousGroup3Page"));
const MagicWondrousGroup4Page = lazy(() => import("./MagicWondrousGroup1Page"));
const MagicWondrousGroup5Page = lazy(() => import("./MagicWondrousGroup2Page"));
const MagicWondrousGroup6Page = lazy(() => import("./MagicWondrousGroup3Page"));
const MagicWondrousGroup7Page = lazy(() => import("./MagicWondrousGroup1Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicWondrousGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicWondrousGroup2Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicWondrousGroup3Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicWondrousGroup4Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicWondrousGroup5Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicWondrousGroup6Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicWondrousGroup7Page id={id} /></Suspense>,
]

const MagicWondrousPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default MagicWondrousPage;
