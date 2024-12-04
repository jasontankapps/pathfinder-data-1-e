import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_race.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const RaceGroup1Page = lazy(() => import("./RaceGroup1Page"));
const RaceGroup2Page = lazy(() => import("./RaceGroup2Page"));
const RaceGroup3Page = lazy(() => import("./RaceGroup3Page"));
const RaceGroup4Page = lazy(() => import("./RaceGroup4Page"));

const pages = [
	({id}: {id: string}) => <RaceGroup1Page id={id} />,
	({id}: {id: string}) => <RaceGroup2Page id={id} />,
	({id}: {id: string}) => <RaceGroup3Page id={id} />,
	({id}: {id: string}) => <RaceGroup4Page id={id} />,
]

const RacePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default RacePage;
