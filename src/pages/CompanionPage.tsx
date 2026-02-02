import { useParams } from 'wouter';
import Companion, { test } from './subpages/__companion';
import './Page.css';

type Params = { id?: string };

const CompanionPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Companion id={test(id) ? id : "not_found"} />;
};

export default CompanionPage;
