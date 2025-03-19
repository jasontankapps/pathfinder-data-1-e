import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_family.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const MonsterFamilyGroup1Page = lazy(() => import("./MonsterFamilyGroup1Page"));
const MonsterFamilyGroup2Page = lazy(() => import("./MonsterFamilyGroup2Page"));

const pages = [
	({id}: {id: string}) => <MonsterFamilyGroup1Page id={id} />,
	({id}: {id: string}) => <MonsterFamilyGroup2Page id={id} />,
]

const MonsterFamilyPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default MonsterFamilyPage;
