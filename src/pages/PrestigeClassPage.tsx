import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_prestigeclass.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const PrestigeClassGroup1Page = lazy(() => import("./PrestigeClassGroup1Page"));
const PrestigeClassGroup2Page = lazy(() => import("./PrestigeClassGroup2Page"));
const PrestigeClassGroup3Page = lazy(() => import("./PrestigeClassGroup3Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><PrestigeClassGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><PrestigeClassGroup2Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><PrestigeClassGroup3Page id={id} /></Suspense>,
]

const PrestigeClassPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default PrestigeClassPage;
