import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_main.json';
import Loading from '../Loading';
import './Page.css';

type Params = { mainpage?: keyof typeof data };

const MainGroup01Page = lazy(() => import("./MainGroup01Page"));
const MainGroup02Page = lazy(() => import("./MainGroup02Page"));
const MainGroup03Page = lazy(() => import("./MainGroup03Page"));
const MainGroup04Page = lazy(() => import("./MainGroup04Page"));
const MainGroup05Page = lazy(() => import("./MainGroup05Page"));
const MainGroup06Page = lazy(() => import("./MainGroup06Page"));
const MainGroup07Page = lazy(() => import("./MainGroup07Page"));
const MainGroup08Page = lazy(() => import("./MainGroup08Page"));
const MainGroup09Page = lazy(() => import("./MainGroup09Page"));
const MainGroup10Page = lazy(() => import("./MainGroup10Page"));
const MainGroup11Page = lazy(() => import("./MainGroup11Page"));
const MainGroup12Page = lazy(() => import("./MainGroup12Page"));
const MainGroup13Page = lazy(() => import("./MainGroup13Page"));
const MainGroup14Page = lazy(() => import("./MainGroup14Page"));
const MainGroup15Page = lazy(() => import("./MainGroup15Page"));
const MainGroup16Page = lazy(() => import("./MainGroup16Page"));
const MainGroup17Page = lazy(() => import("./MainGroup17Page"));
const MainGroup18Page = lazy(() => import("./MainGroup18Page"));
const MainGroup19Page = lazy(() => import("./MainGroup19Page"));
const MainGroup20Page = lazy(() => import("./MainGroup20Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup01Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup02Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup03Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup04Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup05Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup06Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup07Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup08Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup09Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup10Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup11Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup12Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup13Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup14Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup15Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup16Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup17Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup18Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup19Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MainGroup20Page id={id} /></Suspense>,
]

const MainPage: React.FC = () => {

	const { mainpage } = useParams<Params>();

	const Page = pages[mainpage ? ((data[mainpage] || 1) - 1) : 0];

	return <Page id={mainpage || "main"} />;

};

export default MainPage;
