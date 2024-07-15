import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_ability.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const ClassAbilityGroup1Page = lazy(() => import("./ClassAbilityGroup1Page"));
const ClassAbilityGroup2Page = lazy(() => import("./ClassAbilityGroup2Page"));
const ClassAbilityGroup3Page = lazy(() => import("./ClassAbilityGroup3Page"));

const pages = [
	({id}: {id: string}) => <ClassAbilityGroup1Page id={id} />,
	({id}: {id: string}) => <ClassAbilityGroup2Page id={id} />,
	({id}: {id: string}) => <ClassAbilityGroup3Page id={id} />,
]

const ClassAbilityPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default ClassAbilityPage;
