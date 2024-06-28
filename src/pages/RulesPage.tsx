import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_rule.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const RulesGroup01Page = lazy(() => import("./RulesGroup01Page"));
const RulesGroup02Page = lazy(() => import("./RulesGroup02Page"));
const RulesGroup03Page = lazy(() => import("./RulesGroup03Page"));
const RulesGroup04Page = lazy(() => import("./RulesGroup04Page"));
const RulesGroup05Page = lazy(() => import("./RulesGroup05Page"));
const RulesGroup06Page = lazy(() => import("./RulesGroup06Page"));
const RulesGroup07Page = lazy(() => import("./RulesGroup07Page"));
const RulesGroup08Page = lazy(() => import("./RulesGroup08Page"));
const RulesGroup09Page = lazy(() => import("./RulesGroup09Page"));
const RulesGroup10Page = lazy(() => import("./RulesGroup10Page"));
const RulesGroup11Page = lazy(() => import("./RulesGroup11Page"));
const RulesGroup12Page = lazy(() => import("./RulesGroup12Page"));
const RulesGroup13Page = lazy(() => import("./RulesGroup13Page"));
const RulesGroup14Page = lazy(() => import("./RulesGroup14Page"));
const RulesGroup15Page = lazy(() => import("./RulesGroup15Page"));
const RulesGroup16Page = lazy(() => import("./RulesGroup16Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup01Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup02Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup03Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup04Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup05Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup06Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup07Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup08Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup09Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup10Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup11Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup12Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup13Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup14Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup15Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><RulesGroup16Page id={id} /></Suspense>,
]

const RulesPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default RulesPage;
