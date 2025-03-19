import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_npc.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const NPCGroup1Page = lazy(() => import("./NPCGroup1Page"));
const NPCGroup2Page = lazy(() => import("./NPCGroup2Page"));
const NPCGroup3Page = lazy(() => import("./NPCGroup3Page"));
const NPCGroup4Page = lazy(() => import("./NPCGroup4Page"));
const NPCGroup5Page = lazy(() => import("./NPCGroup5Page"));
const NPCGroup6Page = lazy(() => import("./NPCGroup6Page"));
const NPCGroup7Page = lazy(() => import("./NPCGroup7Page"));
const NPCGroup8Page = lazy(() => import("./NPCGroup8Page"));

const pages = [
	({id}: {id: string}) => <NPCGroup1Page id={id} />,
	({id}: {id: string}) => <NPCGroup2Page id={id} />,
	({id}: {id: string}) => <NPCGroup3Page id={id} />,
	({id}: {id: string}) => <NPCGroup4Page id={id} />,
	({id}: {id: string}) => <NPCGroup5Page id={id} />,
	({id}: {id: string}) => <NPCGroup6Page id={id} />,
	({id}: {id: string}) => <NPCGroup7Page id={id} />,
	({id}: {id: string}) => <NPCGroup8Page id={id} />,
]

const NPCPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default NPCPage;
