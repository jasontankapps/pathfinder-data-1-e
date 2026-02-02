import { useParams } from 'wouter';
import Drug, { test } from './subpages/__drug';
import './Page.css';

type Params = { id?: string };

const DrugPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Drug id={test(id) ? id : "not_found"} />;
};

export default DrugPage;
