import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_GEN_npc.json';
import ErrorPage from './ErrorPage';
import './css/Page.css';

type Params = { id?: keyof typeof data };

const NPCGroup1Page = lazy(() => import("./NPCGroup1Page"));
const NPCGroup2Page = lazy(() => import("./NPCGroup2Page"));
const NPCGroup3Page = lazy(() => import("./NPCGroup3Page"));
const NPCGroup4Page = lazy(() => import("./NPCGroup4Page"));
const NPCGroup5Page = lazy(() => import("./NPCGroup5Page"));
const NPCGroup6Page = lazy(() => import("./NPCGroup6Page"));
const NPCGroup7Page = lazy(() => import("./NPCGroup7Page"));
const NPCGroup8Page = lazy(() => import("./NPCGroup8Page"));

interface Props {
	id: string
}

const pages = [
	({id}: Props) => <NPCGroup1Page id={id} />,
	({id}: Props) => <NPCGroup2Page id={id} />,
	({id}: Props) => <NPCGroup3Page id={id} />,
	({id}: Props) => <NPCGroup4Page id={id} />,
	({id}: Props) => <NPCGroup5Page id={id} />,
	({id}: Props) => <NPCGroup6Page id={id} />,
	({id}: Props) => <NPCGroup7Page id={id} />,
	({id}: Props) => <NPCGroup8Page id={id} />,
]

const NPCPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} />;

};

export default NPCPage;
