import { lazy } from 'react';
import data from '../json/_GEN_arc-alchemist.json';
import ErrorPage from './ErrorPage';
import './Page.css';

const ArchetypeGroup16Subgroup1Page = lazy(() => import("./ArchetypeGroup16Subgroup1Page"));
const ArchetypeGroup16Subgroup2Page = lazy(() => import("./ArchetypeGroup16Subgroup2Page"));

interface PageProps {
	id: string
	classTitle: string
}

const pages = [
	({id, classTitle}: PageProps) => <ArchetypeGroup16Subgroup1Page id={id} parent="alchemist" classTitle={classTitle} />,
	({id, classTitle}: PageProps) => <ArchetypeGroup16Subgroup2Page id={id} parent="alchemist" classTitle={classTitle} />,
];

type DataId = keyof typeof data;

export interface ArchetypeProps {
	id: DataId | string,
	parent: string,
	classTitle: string
};


const ArchetypeGroup16Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const Page = pages[id ? ((data[id as DataId] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} classTitle={classTitle} />;

};

export default ArchetypeGroup16Page;
