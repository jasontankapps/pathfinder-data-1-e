import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_main.json';
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
const MainGroup21Page = lazy(() => import("./MainGroup21Page"));
const MainGroup22Page = lazy(() => import("./MainGroup22Page"));
const MainGroup23Page = lazy(() => import("./MainGroup23Page"));
const MainGroup24Page = lazy(() => import("./MainGroup24Page"));
const MainGroup25Page = lazy(() => import("./MainGroup25Page"));
const MainGroup26Page = lazy(() => import("./MainGroup26Page"));
const MainGroup27Page = lazy(() => import("./MainGroup27Page"));
const MainGroup28Page = lazy(() => import("./MainGroup28Page"));
const MainGroup29Page = lazy(() => import("./MainGroup29Page"));
const MainGroup30Page = lazy(() => import("./MainGroup30Page"));
const MainGroup31Page = lazy(() => import("./MainGroup31Page"));
const MainGroup32Page = lazy(() => import("./MainGroup32Page"));
const MainGroup33Page = lazy(() => import("./MainGroup33Page"));
const MainGroup34Page = lazy(() => import("./MainGroup34Page"));
const MainGroup35Page = lazy(() => import("./MainGroup35Page"));

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
	({id}: {id: string}) => <MainGroup21Page id={id} />,
	({id}: {id: string}) => <MainGroup22Page id={id} />,
	({id}: {id: string}) => <MainGroup23Page id={id} />,
	({id}: {id: string}) => <MainGroup24Page id={id} />,
	({id}: {id: string}) => <MainGroup25Page id={id} />,
	({id}: {id: string}) => <MainGroup26Page id={id} />,
	({id}: {id: string}) => <MainGroup27Page id={id} />,
	({id}: {id: string}) => <MainGroup28Page id={id} />,
	({id}: {id: string}) => <MainGroup29Page id={id} />,
	({id}: {id: string}) => <MainGroup30Page id={id} />,
	({id}: {id: string}) => <MainGroup31Page id={id} />,
	({id}: {id: string}) => <MainGroup32Page id={id} />,
	({id}: {id: string}) => <MainGroup33Page id={id} />,
	({id}: {id: string}) => <MainGroup34Page id={id} />,
	({id}: {id: string}) => <MainGroup35Page id={id} />,
]

const MainPage: React.FC = () => {

	const { mainpage } = useParams<Params>();

	const page = mainpage || "main";

	const index = page ? ((data[page] || 0) - 1) : 0;

	if(index < 0) {
		return <></>;
	}

	const Page = pages[index];

	return <Page id={page} />;

};

export default MainPage;
