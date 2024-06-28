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
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup2Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup3Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup4Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup5Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup6Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup7Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup8Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup9Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup10Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><SpellGroup11Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><OccultRitualGroup12Page id={id} /></Suspense>,
]

const SpellPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default SpellPage;
