import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_template.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const MonsterTemplateGroup1Page = lazy(() => import("./MonsterTemplateGroup1Page"));
const MonsterTemplateGroup2Page = lazy(() => import("./MonsterTemplateGroup2Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterTemplateGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MonsterTemplateGroup2Page id={id} /></Suspense>,
]

const MonsterTemplatePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default MonsterTemplatePage;
