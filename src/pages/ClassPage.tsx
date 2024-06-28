import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_ability.json';
import Loading from '../Loading';
import './Page.css';

interface Params {
	id?: keyof typeof data
	subtopic?: "capstones" | "bonuses" | "archetypes"
};
interface Params2 {
	id: string
	subtopic?: "capstones" | "bonuses" | "archetypes"
};

const ClassGroup1Page = lazy(() => import("./ClassGroup1Page"));
const ClassGroup2Page = lazy(() => import("./ClassGroup2Page"));
const ClassGroup3Page = lazy(() => import("./ClassGroup3Page"));
const ClassGroup4Page = lazy(() => import("./ClassGroup4Page"));

const pages = [
	({id, subtopic}: Params2) => <Suspense fallback={<Loading />}><ClassGroup1Page id={id} subtopic={subtopic} /></Suspense>,
	({id, subtopic}: Params2) => <Suspense fallback={<Loading />}><ClassGroup2Page id={id} subtopic={subtopic} /></Suspense>,
	({id, subtopic}: Params2) => <Suspense fallback={<Loading />}><ClassGroup3Page id={id} subtopic={subtopic} /></Suspense>,
	({id, subtopic}: Params2) => <Suspense fallback={<Loading />}><ClassGroup4Page id={id} subtopic={subtopic} /></Suspense>,
]

const ClassPage: React.FC<Params> = ({subtopic}) => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} subtopic={subtopic} />;

};

export default ClassPage;
