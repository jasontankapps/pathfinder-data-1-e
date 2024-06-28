import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_magic_weapon.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const MagicWeaponGroup1Page = lazy(() => import("./MagicWeaponGroup1Page"));
const MagicWeaponGroup2Page = lazy(() => import("./MagicWeaponGroup2Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicWeaponGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicWeaponGroup2Page id={id} /></Suspense>,
]

const MagicWeaponPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default MagicWeaponPage;
