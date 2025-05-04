import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_pclass.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const PrestigeClassGroup1Page = lazy(() => import("./PrestigeClassGroup1Page"));
const PrestigeClassGroup2Page = lazy(() => import("./PrestigeClassGroup2Page"));
const PrestigeClassGroup3Page = lazy(() => import("./PrestigeClassGroup3Page"));
const PrestigeClassGroup4Page = lazy(() => import("./PrestigeClassGroup4Page"));

const pages = [
	({id}: {id: string}) => <PrestigeClassGroup1Page id={id} />,
	({id}: {id: string}) => <PrestigeClassGroup2Page id={id} />,
	({id}: {id: string}) => <PrestigeClassGroup3Page id={id} />,
	({id}: {id: string}) => <PrestigeClassGroup4Page id={id} />,
]

const PrestigeClassPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default PrestigeClassPage;
