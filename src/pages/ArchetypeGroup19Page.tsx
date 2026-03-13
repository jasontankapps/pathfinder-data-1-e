import { lazy } from 'react';
import data from '../json/_GEN_arc-fighter.json';
import ErrorPage from './ErrorPage';
import './Page.css';

const ArchetypeGroup19Subgroup1Page = lazy(() => import("./ArchetypeGroup19Subgroup1Page"));
const ArchetypeGroup19Subgroup2Page = lazy(() => import("./ArchetypeGroup19Subgroup2Page"));

interface PageProps {
	id: string
	classTitle: string
}

const pages = [
	({id, classTitle}: PageProps) => <ArchetypeGroup19Subgroup1Page id={id} parent="fighter" classTitle={classTitle} />,
	({id, classTitle}: PageProps) => <ArchetypeGroup19Subgroup2Page id={id} parent="fighter" classTitle={classTitle} />,
];

type DataId = keyof typeof data;

export interface ArchetypeProps {
	id: DataId | string,
	parent: string,
	classTitle: string
};


const ArchetypeGroup19Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const Page = pages[id ? ((data[id as DataId] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} classTitle={classTitle} />;

};

export default ArchetypeGroup19Page;
