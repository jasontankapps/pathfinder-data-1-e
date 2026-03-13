import { lazy } from 'react';
import data from '../json/_GEN_arc-bard.json';
import ErrorPage from './ErrorPage';
import './Page.css';

const ArchetypeGroup15Subgroup1Page = lazy(() => import("./ArchetypeGroup15Subgroup1Page"));
const ArchetypeGroup15Subgroup2Page = lazy(() => import("./ArchetypeGroup15Subgroup2Page"));

interface PageProps {
	id: string
	classTitle: string
}

const pages = [
	({id, classTitle}: PageProps) => <ArchetypeGroup15Subgroup1Page id={id} parent="bard" classTitle={classTitle} />,
	({id, classTitle}: PageProps) => <ArchetypeGroup15Subgroup2Page id={id} parent="bard" classTitle={classTitle} />,
];

type DataId = keyof typeof data;

export interface ArchetypeProps {
	id: DataId | string,
	parent: string,
	classTitle: string
};


const ArchetypeGroup15Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const Page = pages[id ? ((data[id as DataId] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} classTitle={classTitle} />;

};

export default ArchetypeGroup15Page;
