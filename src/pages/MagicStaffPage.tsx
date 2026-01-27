import { useParams } from 'wouter';
import magic from './subpages/__magic-staff';
import './Page.css';

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? magic[id] || magic.not_found : magic.not_found;

	return <Page />;
};

export default MagicPage;
