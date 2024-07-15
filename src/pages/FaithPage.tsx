import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_faith.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const FaithGroup1Page = lazy(() => import("./FaithGroup1Page"));
const FaithGroup2Page = lazy(() => import("./FaithGroup2Page"));
const FaithGroup3Page = lazy(() => import("./FaithGroup3Page"));

const pages = [
	({id}: {id: string}) => <FaithGroup1Page id={id} />,
	({id}: {id: string}) => <FaithGroup2Page id={id} />,
	({id}: {id: string}) => <FaithGroup3Page id={id} />,
]

const FaithPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default FaithPage;
