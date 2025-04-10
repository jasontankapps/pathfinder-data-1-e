import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_eq-misc.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const EquipmentMiscGroup1Page = lazy(() => import("./EquipmentMiscGroup1Page"));
const EquipmentMiscGroup2Page = lazy(() => import("./EquipmentMiscGroup2Page"));
const EquipmentMiscGroup3Page = lazy(() => import("./EquipmentMiscGroup3Page"));
const EquipmentMiscGroup4Page = lazy(() => import("./EquipmentMiscGroup4Page"));

const pages = [
	({id}: {id: string}) => <EquipmentMiscGroup1Page id={id} />,
	({id}: {id: string}) => <EquipmentMiscGroup2Page id={id} />,
	({id}: {id: string}) => <EquipmentMiscGroup3Page id={id} />,
	({id}: {id: string}) => <EquipmentMiscGroup4Page id={id} />,
]

const EquipmentMiscPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default EquipmentMiscPage;
