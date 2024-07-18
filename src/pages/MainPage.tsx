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
	({id}: {id: string}) => <MainGroup01Page id={id} />,
	({id}: {id: string}) => <MainGroup02Page id={id} />,
	({id}: {id: string}) => <MainGroup03Page id={id} />,
	({id}: {id: string}) => <MainGroup04Page id={id} />,
	({id}: {id: string}) => <MainGroup05Page id={id} />,
	({id}: {id: string}) => <MainGroup06Page id={id} />,
	({id}: {id: string}) => <MainGroup07Page id={id} />,
	({id}: {id: string}) => <MainGroup08Page id={id} />,
	({id}: {id: string}) => <MainGroup09Page id={id} />,
	({id}: {id: string}) => <MainGroup10Page id={id} />,
	({id}: {id: string}) => <MainGroup11Page id={id} />,
	({id}: {id: string}) => <MainGroup12Page id={id} />,
	({id}: {id: string}) => <MainGroup13Page id={id} />,
	({id}: {id: string}) => <MainGroup14Page id={id} />,
	({id}: {id: string}) => <MainGroup15Page id={id} />,
	({id}: {id: string}) => <MainGroup16Page id={id} />,
	({id}: {id: string}) => <MainGroup17Page id={id} />,
	({id}: {id: string}) => <MainGroup18Page id={id} />,
	({id}: {id: string}) => <MainGroup19Page id={id} />,
	({id}: {id: string}) => <MainGroup20Page id={id} />,
]

const MainPage: React.FC<{id?: "main"}> = ({id = "main"}) => {

	const { mainpage } = useParams<Params>();

	const page = mainpage || id;

	const index = page ? ((data[page] || 0) - 1) : 0;

	if(index < 0) {
		return <></>;
	}

	const Page = pages[index];

	return <Suspense fallback={<Loading />}><Page id={mainpage || id} /></Suspense>;

};

export default MainPage;
