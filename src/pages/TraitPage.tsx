import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_trait.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const TraitGroup1Page = lazy(() => import("./TraitGroup1Page"));
const TraitGroup2Page = lazy(() => import("./TraitGroup2Page"));
const TraitGroup3Page = lazy(() => import("./TraitGroup3Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><TraitGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><TraitGroup2Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><TraitGroup3Page id={id} /></Suspense>,
]

const TraitPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default TraitPage;
