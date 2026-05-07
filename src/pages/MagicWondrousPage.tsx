import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_GEN_magic-wondrous.json';
import ErrorPage from './ErrorPage';
import './css/Page.css';

type Params = { id?: keyof typeof data };

const MagicWondrousGroup1Page = lazy(() => import("./MagicWondrousGroup1Page"));
const MagicWondrousGroup2Page = lazy(() => import("./MagicWondrousGroup2Page"));
const MagicWondrousGroup3Page = lazy(() => import("./MagicWondrousGroup3Page"));
const MagicWondrousGroup4Page = lazy(() => import("./MagicWondrousGroup4Page"));
const MagicWondrousGroup5Page = lazy(() => import("./MagicWondrousGroup5Page"));
const MagicWondrousGroup6Page = lazy(() => import("./MagicWondrousGroup6Page"));
const MagicWondrousGroup7Page = lazy(() => import("./MagicWondrousGroup7Page"));
const MagicWondrousGroup8Page = lazy(() => import("./MagicWondrousGroup8Page"));
const MagicWondrousGroup9Page = lazy(() => import("./MagicWondrousGroup9Page"));
const MagicWondrousGroup10Page = lazy(() => import("./MagicWondrousGroup10Page"));
const MagicWondrousGroup11Page = lazy(() => import("./MagicWondrousGroup11Page"));

interface Props {
	id: string
}

const pages = [
	({id}: Props) => <MagicWondrousGroup1Page id={id} />,
	({id}: Props) => <MagicWondrousGroup2Page id={id} />,
	({id}: Props) => <MagicWondrousGroup3Page id={id} />,
	({id}: Props) => <MagicWondrousGroup4Page id={id} />,
	({id}: Props) => <MagicWondrousGroup5Page id={id} />,
	({id}: Props) => <MagicWondrousGroup6Page id={id} />,
	({id}: Props) => <MagicWondrousGroup7Page id={id} />,
	({id}: Props) => <MagicWondrousGroup8Page id={id} />,
	({id}: Props) => <MagicWondrousGroup9Page id={id} />,
	({id}: Props) => <MagicWondrousGroup10Page id={id} />,
	({id}: Props) => <MagicWondrousGroup11Page id={id} />,
]

const MagicWondrousPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} />;

};

export default MagicWondrousPage;
