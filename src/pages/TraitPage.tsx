import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_trait.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const TraitGroup1Page = lazy(() => import("./TraitGroup1Page"));
const TraitGroup2Page = lazy(() => import("./TraitGroup2Page"));
const TraitGroup3Page = lazy(() => import("./TraitGroup3Page"));
const TraitGroup4Page = lazy(() => import("./TraitGroup4Page"));
const TraitGroup5Page = lazy(() => import("./TraitGroup5Page"));

const pages = [
	({id}: {id: string}) => <TraitGroup1Page id={id} />,
	({id}: {id: string}) => <TraitGroup2Page id={id} />,
	({id}: {id: string}) => <TraitGroup3Page id={id} />,
	({id}: {id: string}) => <TraitGroup4Page id={id} />,
	({id}: {id: string}) => <TraitGroup5Page id={id} />,
]

const TraitPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default TraitPage;
