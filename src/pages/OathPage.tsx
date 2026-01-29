import { useParams } from 'wouter';
import oaths from './subpages/__oath';
import './Page.css';

type Data = typeof oaths;

type Params = { id?: keyof Data };

const OathPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = oaths[id] || oaths.not_found;

	return <Page />;
};

export default OathPage;
