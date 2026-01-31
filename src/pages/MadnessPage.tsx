import { useParams } from 'wouter';
import madnesses from './subpages/__madness';
import './Page.css';

type Params = { id?: string };

const MadnessPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = madnesses[id] || madnesses.not_found;

	return <Page />;
};

export default MadnessPage;
