import { Suspense, lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_magic-enhancement.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const MagicEnhancementGroup1Page = lazy(() => import("./MagicEnhancementGroup1Page"));
const MagicEnhancementGroup2Page = lazy(() => import("./MagicEnhancementGroup2Page"));

const pages = [
	({id}: {id: string}) => <MagicEnhancementGroup1Page id={id} />,
	({id}: {id: string}) => <MagicEnhancementGroup2Page id={id} />,
]

const MagicEnhancementPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default MagicEnhancementPage;
