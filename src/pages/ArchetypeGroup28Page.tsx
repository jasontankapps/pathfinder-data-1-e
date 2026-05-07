import { lazy } from 'react';
import data from '../json/_GEN_arc-monk.json';
import ErrorPage from './ErrorPage';
import './css/Page.css';

const ArchetypeGroup28Subgroup1Page = lazy(() => import("./ArchetypeGroup28Subgroup1Page"));
const ArchetypeGroup28Subgroup2Page = lazy(() => import("./ArchetypeGroup28Subgroup2Page"));

interface PageProps {
	id: string
	classTitle: string
}

const pages = [
	({id, classTitle}: PageProps) => <ArchetypeGroup28Subgroup1Page id={id} parent="monk" classTitle={classTitle} />,
	({id, classTitle}: PageProps) => <ArchetypeGroup28Subgroup2Page id={id} parent="monk" classTitle={classTitle} />,
];

type DataId = keyof typeof data;

export interface ArchetypeProps {
	id: DataId | string,
	parent: string,
	classTitle: string
};


const ArchetypeGroup28Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const Page = pages[id ? ((data[id as DataId] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} classTitle={classTitle} />;

};

export default ArchetypeGroup28Page;
