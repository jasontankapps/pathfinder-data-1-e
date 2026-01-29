import { useParams } from 'wouter';
import madnesses from './subpages/__madness';
import './Page.css';

type Data = typeof madnesses;

type Params = { id?: keyof Data };

const MadnessPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = madnesses[id] || madnesses.not_found;

	return <Page />;
};

export default MadnessPage;
