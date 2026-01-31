import { useParams } from 'wouter';
import magic from './subpages/__magic-armor';
import './Page.css';

type Params = { id?: string };

const MagicPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = magic[id] || magic.not_found;

	return <Page />;
};

export default MagicPage;
