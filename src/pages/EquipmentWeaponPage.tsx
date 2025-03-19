import { Suspense, lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_eq-weapon.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const EquipmentWeaponGroup1Page = lazy(() => import("./EquipmentWeaponGroup1Page"));
const EquipmentWeaponGroup2Page = lazy(() => import("./EquipmentWeaponGroup2Page"));

const pages = [
	({id}: {id: string}) => <EquipmentWeaponGroup1Page id={id} />,
	({id}: {id: string}) => <EquipmentWeaponGroup2Page id={id} />,
]

const EquipmentWeaponPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default EquipmentWeaponPage;
