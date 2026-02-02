import { useParams } from 'wouter';
import Oath, { test } from './subpages/__oath';
import './Page.css';

type Params = { id?: string };

const OathPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Oath id={test(id) ? id : "not_found"} />;
};

export default OathPage;
