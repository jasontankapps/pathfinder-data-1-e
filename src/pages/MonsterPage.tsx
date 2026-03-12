import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_GEN_monster.json';
import ErrorPage from './ErrorPage';
import './Page.css';

type Params = { id?: keyof typeof data };

const MonsterGroup01Page = lazy(() => import("./MonsterGroup01Page"));
const MonsterGroup02Page = lazy(() => import("./MonsterGroup02Page"));
const MonsterGroup03Page = lazy(() => import("./MonsterGroup03Page"));
const MonsterGroup04Page = lazy(() => import("./MonsterGroup04Page"));
const MonsterGroup05Page = lazy(() => import("./MonsterGroup05Page"));
const MonsterGroup06Page = lazy(() => import("./MonsterGroup06Page"));
const MonsterGroup07Page = lazy(() => import("./MonsterGroup07Page"));
const MonsterGroup08Page = lazy(() => import("./MonsterGroup08Page"));
const MonsterGroup09Page = lazy(() => import("./MonsterGroup09Page"));
const MonsterGroup10Page = lazy(() => import("./MonsterGroup10Page"));
const MonsterGroup11Page = lazy(() => import("./MonsterGroup11Page"));
const MonsterGroup12Page = lazy(() => import("./MonsterGroup12Page"));
const MonsterGroup13Page = lazy(() => import("./MonsterGroup13Page"));
const MonsterGroup14Page = lazy(() => import("./MonsterGroup14Page"));
const MonsterGroup15Page = lazy(() => import("./MonsterGroup15Page"));
const MonsterGroup16Page = lazy(() => import("./MonsterGroup16Page"));
const MonsterGroup17Page = lazy(() => import("./MonsterGroup17Page"));
const MonsterGroup18Page = lazy(() => import("./MonsterGroup18Page"));
const MonsterGroup19Page = lazy(() => import("./MonsterGroup19Page"));
const MonsterGroup20Page = lazy(() => import("./MonsterGroup20Page"));
const MonsterGroup21Page = lazy(() => import("./MonsterGroup21Page"));
const MonsterGroup22Page = lazy(() => import("./MonsterGroup22Page"));
const MonsterGroup23Page = lazy(() => import("./MonsterGroup23Page"));
const MonsterGroup24Page = lazy(() => import("./MonsterGroup24Page"));
const MonsterGroup25Page = lazy(() => import("./MonsterGroup25Page"));
const MonsterGroup26Page = lazy(() => import("./MonsterGroup26Page"));
const MonsterGroup27Page = lazy(() => import("./MonsterGroup27Page"));
const MonsterGroup28Page = lazy(() => import("./MonsterGroup28Page"));
const MonsterGroup29Page = lazy(() => import("./MonsterGroup29Page"));
const MonsterGroup30Page = lazy(() => import("./MonsterGroup30Page"));
const MonsterGroup31Page = lazy(() => import("./MonsterGroup31Page"));
const MonsterGroup32Page = lazy(() => import("./MonsterGroup32Page"));
const MonsterGroup33Page = lazy(() => import("./MonsterGroup33Page"));
const MonsterGroup34Page = lazy(() => import("./MonsterGroup34Page"));
const MonsterGroup35Page = lazy(() => import("./MonsterGroup35Page"));
const MonsterGroup36Page = lazy(() => import("./MonsterGroup36Page"));
const MonsterGroup37Page = lazy(() => import("./MonsterGroup37Page"));
const MonsterGroup38Page = lazy(() => import("./MonsterGroup38Page"));
const MonsterGroup39Page = lazy(() => import("./MonsterGroup39Page"));
const MonsterGroup40Page = lazy(() => import("./MonsterGroup40Page"));
const MonsterGroup41Page = lazy(() => import("./MonsterGroup41Page"));
const MonsterGroup42Page = lazy(() => import("./MonsterGroup42Page"));
const MonsterUniqueGroup01Page = lazy(() => import("./MonsterUniqueGroup01Page"));
const MonsterUniqueGroup02Page = lazy(() => import("./MonsterUniqueGroup02Page"));
const MonsterUniqueGroup03Page = lazy(() => import("./MonsterUniqueGroup03Page"));
const MonsterUniqueGroup04Page = lazy(() => import("./MonsterUniqueGroup04Page"));
const MonsterMythicGroup01Page = lazy(() => import("./MonsterMythicGroup01Page"));
const MonsterMythicGroup02Page = lazy(() => import("./MonsterMythicGroup02Page"));

interface Props {
	id: string
}

const pages = [
	({id}: Props) => <MonsterGroup01Page id={id} />,
	({id}: Props) => <MonsterGroup02Page id={id} />,
	({id}: Props) => <MonsterGroup03Page id={id} />,
	({id}: Props) => <MonsterGroup04Page id={id} />,
	({id}: Props) => <MonsterGroup05Page id={id} />,
	({id}: Props) => <MonsterGroup06Page id={id} />,
	({id}: Props) => <MonsterGroup07Page id={id} />,
	({id}: Props) => <MonsterGroup08Page id={id} />,
	({id}: Props) => <MonsterGroup09Page id={id} />,
	({id}: Props) => <MonsterGroup10Page id={id} />,
	({id}: Props) => <MonsterGroup11Page id={id} />,
	({id}: Props) => <MonsterGroup12Page id={id} />,
	({id}: Props) => <MonsterGroup13Page id={id} />,
	({id}: Props) => <MonsterGroup14Page id={id} />,
	({id}: Props) => <MonsterGroup15Page id={id} />,
	({id}: Props) => <MonsterGroup16Page id={id} />,
	({id}: Props) => <MonsterGroup17Page id={id} />,
	({id}: Props) => <MonsterGroup18Page id={id} />,
	({id}: Props) => <MonsterGroup19Page id={id} />,
	({id}: Props) => <MonsterGroup20Page id={id} />,
	({id}: Props) => <MonsterGroup21Page id={id} />,
	({id}: Props) => <MonsterGroup22Page id={id} />,
	({id}: Props) => <MonsterGroup23Page id={id} />,
	({id}: Props) => <MonsterGroup24Page id={id} />,
	({id}: Props) => <MonsterGroup25Page id={id} />,
	({id}: Props) => <MonsterGroup26Page id={id} />,
	({id}: Props) => <MonsterGroup27Page id={id} />,
	({id}: Props) => <MonsterGroup28Page id={id} />,
	({id}: Props) => <MonsterGroup29Page id={id} />,
	({id}: Props) => <MonsterGroup30Page id={id} />,
	({id}: Props) => <MonsterGroup31Page id={id} />,
	({id}: Props) => <MonsterGroup32Page id={id} />,
	({id}: Props) => <MonsterGroup33Page id={id} />,
	({id}: Props) => <MonsterGroup34Page id={id} />,
	({id}: Props) => <MonsterGroup35Page id={id} />,
	({id}: Props) => <MonsterGroup36Page id={id} />,
	({id}: Props) => <MonsterGroup37Page id={id} />,
	({id}: Props) => <MonsterGroup38Page id={id} />,
	({id}: Props) => <MonsterGroup39Page id={id} />,
	({id}: Props) => <MonsterGroup40Page id={id} />,
	({id}: Props) => <MonsterGroup41Page id={id} />,
	({id}: Props) => <MonsterGroup42Page id={id} />,
	({id}: Props) => <MonsterUniqueGroup01Page id={id} />,
	({id}: Props) => <MonsterUniqueGroup02Page id={id} />,
	({id}: Props) => <MonsterUniqueGroup03Page id={id} />,
	({id}: Props) => <MonsterUniqueGroup04Page id={id} />,
	({id}: Props) => <MonsterMythicGroup01Page id={id} />,
	({id}: Props) => <MonsterMythicGroup02Page id={id} />,
]

const MonsterPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} />;

};

export default MonsterPage;
