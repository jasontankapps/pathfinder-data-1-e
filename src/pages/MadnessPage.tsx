import { useParams } from 'wouter';
import Madness, { test } from './subpages/__madness';
import './Page.css';

type Params = { id?: string };

const MadnessPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Madness id={test(id) ? id : "not_found"} />;
};

export default MadnessPage;
