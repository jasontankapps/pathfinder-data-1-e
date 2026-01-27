import { useParams } from 'wouter';
import companions from './subpages/__companion';
import './Page.css';

type Data = typeof companions;

type Params = { id?: keyof Data };

const CompanionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? companions[id] || companions.not_found : companions.not_found;

	return <Page />;
};

export default CompanionPage;
