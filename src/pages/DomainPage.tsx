import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_domain.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const DomainGroup1Page = lazy(() => import("./DomainGroup1Page"));
const DomainGroup2Page = lazy(() => import("./DomainGroup2Page"));

const pages = [
	({id}: {id: string}) => <DomainGroup1Page id={id} />,
	({id}: {id: string}) => <DomainGroup2Page id={id} />,
]

const DomainPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default DomainPage;
