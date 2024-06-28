import { Suspense, lazy } from 'react';
import { useParams } from 'react-router';
import data from '../json/_data_magic_artifact.json';
import Loading from '../Loading';
import './Page.css';

type Params = { id?: keyof typeof data };

const MagicArtifactGroup1Page = lazy(() => import("./MagicArtifactGroup1Page"));
const MagicArtifactGroup2Page = lazy(() => import("./MagicArtifactGroup2Page"));

const pages = [
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicArtifactGroup1Page id={id} /></Suspense>,
	({id}: {id: string}) => <Suspense fallback={<Loading />}><MagicArtifactGroup2Page id={id} /></Suspense>,
]

const MagicArtifactPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default MagicArtifactPage;
