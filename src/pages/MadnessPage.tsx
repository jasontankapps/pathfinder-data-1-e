import { useParams } from 'wouter';
import madnesses from './subpages/__madness';
import './Page.css';

type Data = typeof madnesses;

type Params = { id?: keyof Data };

const MadnessPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? madnesses[id] || madnesses.not_found : madnesses.not_found;

	return <Page />;
};

export default MadnessPage;
