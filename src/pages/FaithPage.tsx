import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_GEN_faith.json';
import ErrorPage from './ErrorPage';
import './Page.css';

type Params = { id?: keyof typeof data };

const FaithGroup1Page = lazy(() => import("./FaithGroup1Page"));
const FaithGroup2Page = lazy(() => import("./FaithGroup2Page"));
const FaithGroup3Page = lazy(() => import("./FaithGroup3Page"));
const FaithGroup4Page = lazy(() => import("./FaithGroup4Page"));
const FaithGroup5Page = lazy(() => import("./FaithGroup5Page"));
const FaithGroup6Page = lazy(() => import("./FaithGroup6Page"));
const FaithGroup7Page = lazy(() => import("./FaithGroup7Page"));
const FaithGroup8Page = lazy(() => import("./FaithGroup8Page"));
const FaithGroup9Page = lazy(() => import("./FaithGroup9Page"));

interface Props {
	id: string
}

const pages = [
	({id}: Props) => <FaithGroup1Page id={id} />,
	({id}: Props) => <FaithGroup2Page id={id} />,
	({id}: Props) => <FaithGroup3Page id={id} />,
	({id}: Props) => <FaithGroup4Page id={id} />,
	({id}: Props) => <FaithGroup5Page id={id} />,
	({id}: Props) => <FaithGroup6Page id={id} />,
	({id}: Props) => <FaithGroup7Page id={id} />,
	({id}: Props) => <FaithGroup8Page id={id} />,
	({id}: Props) => <FaithGroup9Page id={id} />,
]

const FaithPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} />;

};

export default FaithPage;
