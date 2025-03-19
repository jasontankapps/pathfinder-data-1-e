import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_faith.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const FaithGroup1Page = lazy(() => import("./FaithGroup1Page"));
const FaithGroup2Page = lazy(() => import("./FaithGroup2Page"));
const FaithGroup3Page = lazy(() => import("./FaithGroup3Page"));
const FaithGroup4Page = lazy(() => import("./FaithGroup4Page"));
const FaithGroup5Page = lazy(() => import("./FaithGroup5Page"));
const FaithGroup6Page = lazy(() => import("./FaithGroup6Page"));

const pages = [
	({id}: {id: string}) => <FaithGroup1Page id={id} />,
	({id}: {id: string}) => <FaithGroup2Page id={id} />,
	({id}: {id: string}) => <FaithGroup3Page id={id} />,
	({id}: {id: string}) => <FaithGroup4Page id={id} />,
	({id}: {id: string}) => <FaithGroup5Page id={id} />,
	({id}: {id: string}) => <FaithGroup6Page id={id} />,
]

const FaithPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default FaithPage;
