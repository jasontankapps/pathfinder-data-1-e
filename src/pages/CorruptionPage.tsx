import { useParams } from 'wouter';
import corruptions from './subpages/__corruption';
import './Page.css';

type Data = typeof corruptions;

type Params = { id?: keyof Data };

const CorruptionPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = corruptions[id] || corruptions.not_found;

	return <Page />;
};

export default CorruptionPage;
