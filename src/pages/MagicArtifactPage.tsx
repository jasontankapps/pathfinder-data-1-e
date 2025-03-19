import { lazy } from 'react';
import { useParams } from 'wouter';
import data from '../json/_data_magic-artifact.json';
import './Page.css';

type Params = { id?: keyof typeof data };

const MagicArtifactGroup1Page = lazy(() => import("./MagicArtifactGroup1Page"));
const MagicArtifactGroup2Page = lazy(() => import("./MagicArtifactGroup2Page"));
const MagicArtifactGroup3Page = lazy(() => import("./MagicArtifactGroup3Page"));

const pages = [
	({id}: {id: string}) => <MagicArtifactGroup1Page id={id} />,
	({id}: {id: string}) => <MagicArtifactGroup2Page id={id} />,
	({id}: {id: string}) => <MagicArtifactGroup3Page id={id} />,
]

const MagicArtifactPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = pages[id ? ((data[id] || 1) - 1) : 0];

	return <Page id={id || "not_found"} />;

};

export default MagicArtifactPage;
