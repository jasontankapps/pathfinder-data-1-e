import { useParams } from 'wouter';
import Talent, { test } from './subpages/__kinetic';
import './Page.css';

type Params = { id?: string };

const KineticPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Talent id={test(id) ? id : "not_found"} />;
};

export default KineticPage;
