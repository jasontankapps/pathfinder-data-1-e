import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_template.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const MonsterTemplateGroup1Page = lazy(() => import("./MonsterTemplateGroup1Page"));
const MonsterTemplateGroup2Page = lazy(() => import("./MonsterTemplateGroup2Page"));
const MonsterTemplateGroup3Page = lazy(() => import("./MonsterTemplateGroup3Page"));

const pages = [
	({id}: {id: string}) => <MonsterTemplateGroup1Page id={id} />,
	({id}: {id: string}) => <MonsterTemplateGroup2Page id={id} />,
	({id}: {id: string}) => <MonsterTemplateGroup3Page id={id} />,
]

const MonsterTemplatePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default MonsterTemplatePage;
