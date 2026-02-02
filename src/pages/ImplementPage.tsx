import { useParams } from 'wouter';
import OccultImplement, { test } from './subpages/__implement';
import './Page.css';

type Params = { id?: string };

const ImplementPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <OccultImplement id={test(id) ? id : "not_found"} />;
};

export default ImplementPage;
