import { lazy } from 'react';
import data from '../json/_GEN_arc-druid.json';
import ErrorPage from './ErrorPage';
import './css/Page.css';

const ArchetypeGroup18Subgroup1Page = lazy(() => import("./ArchetypeGroup18Subgroup1Page"));
const ArchetypeGroup18Subgroup2Page = lazy(() => import("./ArchetypeGroup18Subgroup2Page"));

interface PageProps {
	id: string
	classTitle: string
}

const pages = [
	({id, classTitle}: PageProps) => <ArchetypeGroup18Subgroup1Page id={id} parent="druid" classTitle={classTitle} />,
	({id, classTitle}: PageProps) => <ArchetypeGroup18Subgroup2Page id={id} parent="druid" classTitle={classTitle} />,
];

type DataId = keyof typeof data;

export interface ArchetypeProps {
	id: DataId | string,
	parent: string,
	classTitle: string
};


const ArchetypeGroup18Page: React.FC<ArchetypeProps> = ({id, classTitle}) => {

	const Page = pages[id ? ((data[id as DataId] || 1) - 1) : 0] || ErrorPage;

	return <Page id={id || "not_found"} classTitle={classTitle} />;

};

export default ArchetypeGroup18Page;
