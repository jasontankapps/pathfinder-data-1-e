import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_GEN_class.json';
import ErrorPage from './ErrorPage';
import './css/Page.css';

interface Params {
	id?: keyof typeof data
};

const ClassGroup1Page = lazy(() => import("./ClassGroup1Page"));
const ClassGroup2Page = lazy(() => import("./ClassGroup2Page"));
const ClassGroup3Page = lazy(() => import("./ClassGroup3Page"));
const ClassGroup4Page = lazy(() => import("./ClassGroup4Page"));
const ClassGroup5Page = lazy(() => import("./ClassGroup5Page"));
const ClassGroup6Page = lazy(() => import("./ClassGroup6Page"));
const ClassGroup7Page = lazy(() => import("./ClassGroup7Page"));
const ClassGroup8Page = lazy(() => import("./ClassGroup8Page"));

interface Props {
	id: string
}

const pages = [
	({id}: Props) => <ClassGroup1Page id={id} />,
	({id}: Props) => <ClassGroup2Page id={id} />,
	({id}: Props) => <ClassGroup3Page id={id} />,
	({id}: Props) => <ClassGroup4Page id={id} />,
	({id}: Props) => <ClassGroup5Page id={id} />,
	({id}: Props) => <ClassGroup6Page id={id} />,
	({id}: Props) => <ClassGroup7Page id={id} />,
	({id}: Props) => <ClassGroup8Page id={id} />,
];

const ClassPage: React.FC<Params> = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} />;

};

export default ClassPage;
