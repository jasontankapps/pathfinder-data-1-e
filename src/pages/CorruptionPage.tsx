import { useParams } from 'wouter';
import Corruption, { test } from './subpages/__corruption';
import './Page.css';

type Params = { id?: string };

const CorruptionPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Corruption id={test(id) ? id : "not_found"} />;
};

export default CorruptionPage;
