import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_GEN_feat.json';
import ErrorPage from './ErrorPage';
import './Page.css';

type Params = { id?: keyof typeof data };

const FeatGroup1Page = lazy(() => import("./FeatGroup1Page"));
const FeatGroup2Page = lazy(() => import("./FeatGroup2Page"));
const FeatGroup3Page = lazy(() => import("./FeatGroup3Page"));
const FeatGroup4Page = lazy(() => import("./FeatGroup4Page"));
const FeatGroup5Page = lazy(() => import("./FeatGroup5Page"));
const FeatGroup6Page = lazy(() => import("./FeatGroup6Page"));
const FeatGroup7Page = lazy(() => import("./FeatGroup7Page"));
const FeatGroup8Page = lazy(() => import("./FeatGroup8Page"));
const FeatGroup9Page = lazy(() => import("./FeatGroup9Page"));
const FeatGroup10Page = lazy(() => import("./FeatGroup10Page"));
const FeatGroup11Page = lazy(() => import("./FeatGroup11Page"));
const FeatGroup12Page = lazy(() => import("./FeatGroup12Page"));
const FeatGroup13Page = lazy(() => import("./FeatGroup13Page"));
const FeatGroup14Page = lazy(() => import("./FeatGroup14Page"));
const FeatGroup15Page = lazy(() => import("./FeatGroup15Page"));
const FeatGroup16Page = lazy(() => import("./FeatGroup16Page"));
const FeatGroup17Page = lazy(() => import("./FeatGroup17Page"));

interface Props {
	id: string
}

const pages = [
	({id}: Props) => <FeatGroup1Page id={id} />,
	({id}: Props) => <FeatGroup2Page id={id} />,
	({id}: Props) => <FeatGroup3Page id={id} />,
	({id}: Props) => <FeatGroup4Page id={id} />,
	({id}: Props) => <FeatGroup5Page id={id} />,
	({id}: Props) => <FeatGroup6Page id={id} />,
	({id}: Props) => <FeatGroup7Page id={id} />,
	({id}: Props) => <FeatGroup8Page id={id} />,
	({id}: Props) => <FeatGroup9Page id={id} />,
	({id}: Props) => <FeatGroup10Page id={id} />,
	({id}: Props) => <FeatGroup11Page id={id} />,
	({id}: Props) => <FeatGroup12Page id={id} />,
	({id}: Props) => <FeatGroup13Page id={id} />,
	({id}: Props) => <FeatGroup14Page id={id} />,
	({id}: Props) => <FeatGroup15Page id={id} />,
	({id}: Props) => <FeatGroup16Page id={id} />,
	({id}: Props) => <FeatGroup17Page id={id} />,
]

const FeatPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} />;

};

export default FeatPage;
