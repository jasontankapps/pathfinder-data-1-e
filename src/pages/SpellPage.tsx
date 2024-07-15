import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_spell.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const SpellGroup1Page = lazy(() => import("./SpellGroup01Page"));
const SpellGroup2Page = lazy(() => import("./SpellGroup02Page"));
const SpellGroup3Page = lazy(() => import("./SpellGroup03Page"));
const SpellGroup4Page = lazy(() => import("./SpellGroup04Page"));
const SpellGroup5Page = lazy(() => import("./SpellGroup05Page"));
const SpellGroup6Page = lazy(() => import("./SpellGroup06Page"));
const SpellGroup7Page = lazy(() => import("./SpellGroup07Page"));
const SpellGroup8Page = lazy(() => import("./SpellGroup08Page"));
const SpellGroup9Page = lazy(() => import("./SpellGroup09Page"));
const SpellGroup10Page = lazy(() => import("./SpellGroup10Page"));
const SpellGroup11Page = lazy(() => import("./SpellGroup11Page"));
const OccultRitualGroup12Page = lazy(() => import("./SpellGroup12Page"));

const pages = [
	({id}: {id: string}) => <SpellGroup1Page id={id} />,
	({id}: {id: string}) => <SpellGroup2Page id={id} />,
	({id}: {id: string}) => <SpellGroup3Page id={id} />,
	({id}: {id: string}) => <SpellGroup4Page id={id} />,
	({id}: {id: string}) => <SpellGroup5Page id={id} />,
	({id}: {id: string}) => <SpellGroup6Page id={id} />,
	({id}: {id: string}) => <SpellGroup7Page id={id} />,
	({id}: {id: string}) => <SpellGroup8Page id={id} />,
	({id}: {id: string}) => <SpellGroup9Page id={id} />,
	({id}: {id: string}) => <SpellGroup10Page id={id} />,
	({id}: {id: string}) => <SpellGroup11Page id={id} />,
	({id}: {id: string}) => <OccultRitualGroup12Page id={id} />,
]

const SpellPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default SpellPage;
