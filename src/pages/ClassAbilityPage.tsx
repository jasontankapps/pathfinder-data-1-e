import { Suspense, lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_ability.json';
import Loading from '../Loading';
import './Page.css';

type ID = keyof typeof data;

const ClassAbilityGroup1Page = lazy(() => import("./ClassAbilityGroup1Page"));
const ClassAbilityGroup2Page = lazy(() => import("./ClassAbilityGroup2Page"));
const ClassAbilityGroup3Page = lazy(() => import("./ClassAbilityGroup3Page"));
const ClassAbilityGroup4Page = lazy(() => import("./ClassAbilityGroup4Page"));
const ClassAbilityGroup5Page = lazy(() => import("./ClassAbilityGroup5Page"));

const pages = [
	({id}: {id: ID}) => <ClassAbilityGroup1Page id={id} />,
	({id}: {id: ID}) => <ClassAbilityGroup2Page id={id} />,
	({id}: {id: ID}) => <ClassAbilityGroup3Page id={id} />,
	({id}: {id: ID}) => <ClassAbilityGroup4Page id={id} />,
	({id}: {id: ID}) => <ClassAbilityGroup5Page id={id} />,
]

const ClassAbilityPage: React.FC = () => {

	const { id } = useParams<{id:ID}>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default ClassAbilityPage;
