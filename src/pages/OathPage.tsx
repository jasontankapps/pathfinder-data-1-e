import { useParams } from 'wouter';
import oaths from './subpages/__oath';
import './Page.css';

type Params = { id?: string };

const OathPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = oaths[id] || oaths.not_found;

	return <Page />;
};

export default OathPage;
