import { useParams } from 'wouter';
import Inquisition, { test } from './subpages/__inquisition';
import './Page.css';

type Params = { id?: string };

const InquisitionPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Inquisition id={test(id) ? id : "not_found"} />;
};

export default InquisitionPage;
