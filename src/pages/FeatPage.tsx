import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_feat.json';
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

const pages = [
	({id}: {id: string}) => <FeatGroup1Page id={id} />,
	({id}: {id: string}) => <FeatGroup2Page id={id} />,
	({id}: {id: string}) => <FeatGroup3Page id={id} />,
	({id}: {id: string}) => <FeatGroup4Page id={id} />,
	({id}: {id: string}) => <FeatGroup5Page id={id} />,
	({id}: {id: string}) => <FeatGroup6Page id={id} />,
	({id}: {id: string}) => <FeatGroup7Page id={id} />,
	({id}: {id: string}) => <FeatGroup8Page id={id} />,
	({id}: {id: string}) => <FeatGroup9Page id={id} />,
	({id}: {id: string}) => <FeatGroup10Page id={id} />,
	({id}: {id: string}) => <FeatGroup11Page id={id} />,
	({id}: {id: string}) => <FeatGroup12Page id={id} />,
]

const FeatPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default FeatPage;
