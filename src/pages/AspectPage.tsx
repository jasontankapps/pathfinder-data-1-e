import { useParams } from 'wouter';
import Aspect, { test } from './subpages/__aspect';
import './Page.css';

type Params = { id?: string };

const AspectPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Aspect id={test(id) ? id : "not_found"} />;
};

export default AspectPage;
