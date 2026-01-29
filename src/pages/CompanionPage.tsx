import { useParams } from 'wouter';
import companions from './subpages/__companion';
import './Page.css';

type Data = typeof companions;

type Params = { id?: keyof Data };

const CompanionPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = companions[id] || companions.not_found;

	return <Page />;
};

export default CompanionPage;
