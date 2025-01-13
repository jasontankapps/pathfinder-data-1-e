import { Suspense, lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_magic-weapon.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const MagicWeaponGroup1Page = lazy(() => import("./MagicWeaponGroup1Page"));
const MagicWeaponGroup2Page = lazy(() => import("./MagicWeaponGroup2Page"));

const pages = [
	({id}: {id: string}) => <MagicWeaponGroup1Page id={id} />,
	({id}: {id: string}) => <MagicWeaponGroup2Page id={id} />,
]

const MagicWeaponPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Suspense fallback={<Loading />}><Page id={id || "not_found"} /></Suspense>;

};

export default MagicWeaponPage;
