import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_class.json';
import Loading from '../Loading';
import './Page.css';

interface Params {
	id?: keyof typeof data
};

const ClassGroup1Page = lazy(() => import("./ClassGroup1Page"));
const ClassGroup2Page = lazy(() => import("./ClassGroup2Page"));
const ClassGroup3Page = lazy(() => import("./ClassGroup3Page"));
const ClassGroup4Page = lazy(() => import("./ClassGroup4Page"));

const pages = [
	({id}: {id: string}) => <ClassGroup1Page id={id} />,
	({id}: {id: string}) => <ClassGroup2Page id={id} />,
	({id}: {id: string}) => <ClassGroup3Page id={id} />,
	({id}: {id: string}) => <ClassGroup4Page id={id} />,
];

const ClassPage: React.FC<Params> = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default ClassPage;
