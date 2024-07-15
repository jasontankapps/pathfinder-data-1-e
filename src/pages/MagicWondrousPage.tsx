import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_magic_wondrous.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const MagicWondrousGroup1Page = lazy(() => import("./MagicWondrousGroup1Page"));
const MagicWondrousGroup2Page = lazy(() => import("./MagicWondrousGroup2Page"));
const MagicWondrousGroup3Page = lazy(() => import("./MagicWondrousGroup3Page"));
const MagicWondrousGroup4Page = lazy(() => import("./MagicWondrousGroup4Page"));
const MagicWondrousGroup5Page = lazy(() => import("./MagicWondrousGroup5Page"));
const MagicWondrousGroup6Page = lazy(() => import("./MagicWondrousGroup6Page"));
const MagicWondrousGroup7Page = lazy(() => import("./MagicWondrousGroup7Page"));

const pages = [
	({id}: {id: string}) => <MagicWondrousGroup1Page id={id} />,
	({id}: {id: string}) => <MagicWondrousGroup2Page id={id} />,
	({id}: {id: string}) => <MagicWondrousGroup3Page id={id} />,
	({id}: {id: string}) => <MagicWondrousGroup4Page id={id} />,
	({id}: {id: string}) => <MagicWondrousGroup5Page id={id} />,
	({id}: {id: string}) => <MagicWondrousGroup6Page id={id} />,
	({id}: {id: string}) => <MagicWondrousGroup7Page id={id} />,
]

const MagicWondrousPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default MagicWondrousPage;
