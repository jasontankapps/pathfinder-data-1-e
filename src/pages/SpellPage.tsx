import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_GEN_spell.json';
import ErrorPage from './ErrorPage';
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
const SpellGroup12Page = lazy(() => import("./SpellGroup12Page"));
const SpellGroup13Page = lazy(() => import("./SpellGroup13Page"));
const SpellGroup14Page = lazy(() => import("./SpellGroup14Page"));
const SpellGroup15Page = lazy(() => import("./SpellGroup15Page"));
const SpellGroup16Page = lazy(() => import("./SpellGroup16Page"));
const OccultRitualGroupPage = lazy(() => import("./SpellOccultRitualGroupPage"));

interface Props {
	id: string
}

const pages = [
	({id}: Props) => <SpellGroup1Page id={id} />,
	({id}: Props) => <SpellGroup2Page id={id} />,
	({id}: Props) => <SpellGroup3Page id={id} />,
	({id}: Props) => <SpellGroup4Page id={id} />,
	({id}: Props) => <SpellGroup5Page id={id} />,
	({id}: Props) => <SpellGroup6Page id={id} />,
	({id}: Props) => <SpellGroup7Page id={id} />,
	({id}: Props) => <SpellGroup8Page id={id} />,
	({id}: Props) => <SpellGroup9Page id={id} />,
	({id}: Props) => <SpellGroup10Page id={id} />,
	({id}: Props) => <SpellGroup11Page id={id} />,
	({id}: Props) => <SpellGroup12Page id={id} />,
	({id}: Props) => <SpellGroup13Page id={id} />,
	({id}: Props) => <SpellGroup14Page id={id} />,
	({id}: Props) => <SpellGroup15Page id={id} />,
	({id}: Props) => <SpellGroup16Page id={id} />,
	({id}: Props) => <OccultRitualGroupPage id={id} />,
]

const SpellPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} />;

};

export default SpellPage;
