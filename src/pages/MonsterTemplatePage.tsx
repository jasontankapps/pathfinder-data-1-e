import { FC, lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_GEN_template.json';
import ErrorPage from './ErrorPage';
import './Page.css';

type Params = { id?: keyof typeof data };

const MonsterTemplateGroup1Page = lazy(() => import("./MonsterTemplateGroup1Page"));
const MonsterTemplateGroup2Page = lazy(() => import("./MonsterTemplateGroup2Page"));
const MonsterTemplateGroup3Page = lazy(() => import("./MonsterTemplateGroup3Page"));
const MonsterTemplateGroup4Page = lazy(() => import("./MonsterTemplateGroup4Page"));

const pages = [
	({id}: {id: string}) => <MonsterTemplateGroup1Page id={id} />,
	({id}: {id: string}) => <MonsterTemplateGroup2Page id={id} />,
	({id}: {id: string}) => <MonsterTemplateGroup3Page id={id} />,
	({id}: {id: string}) => <MonsterTemplateGroup4Page id={id} />,
]

const MonsterTemplatePage: FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} />;

};

export default MonsterTemplatePage;
