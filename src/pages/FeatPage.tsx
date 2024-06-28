import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_feat.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const FeatGroup1Page = lazy(() => import("./FeatGroup1Page"));
const FeatGroup2Page = lazy(() => import("./FeatGroup2Page"));
const FeatGroup3Page = lazy(() => import("./FeatGroup3Page"));
const FeatGroup4Page = lazy(() => import("./FeatGroup4Page"));
const FeatGroup5Page = lazy(() => import("./FeatGroup5Page"));
const FeatGroup6Page = lazy(() => import("./FeatGroup6Page"));
const FeatGroup7Page = lazy(() => import("./FeatGroup7Page"));
const FeatGroup8Page = lazy(() => import("./FeatGroup8Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><FeatGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><FeatGroup2Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><FeatGroup3Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><FeatGroup4Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><FeatGroup5Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><FeatGroup6Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><FeatGroup7Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><FeatGroup8Page id={id} /></Suspense>,
]

const FeatPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default FeatPage;
