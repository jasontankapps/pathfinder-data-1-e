import { useParams } from 'wouter';
import emotionalfocus from './subpages/__emotionalfocus';
import './Page.css';

type Data = typeof emotionalfocus;

type Params = { id?: keyof Data };

const ArcanaPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? emotionalfocus[id] || emotionalfocus.not_found : emotionalfocus.not_found;

	return <Page />;
};

export default ArcanaPage;
