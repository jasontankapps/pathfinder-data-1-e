import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_race.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const RaceGroup1Page = lazy(() => import("./RaceGroup1Page"));
const RaceGroup2Page = lazy(() => import("./RaceGroup2Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RaceGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RaceGroup2Page id={id} /></Suspense>,
]

const RacePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default RacePage;
