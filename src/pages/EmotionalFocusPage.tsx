import { useParams } from 'wouter';
import emotionalfocus from './subpages/__emotionalfocus';
import './Page.css';

type Data = typeof emotionalfocus;

type Params = { id?: keyof Data };

const ArcanaPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = emotionalfocus[id] || emotionalfocus.not_found;

	return <Page />;
};

export default ArcanaPage;
