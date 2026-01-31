import { useParams } from 'wouter';
import companions from './subpages/__companion';
import './Page.css';

type Params = { id?: string };

const CompanionPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = companions[id] || companions.not_found;

	return <Page />;
};

export default CompanionPage;
