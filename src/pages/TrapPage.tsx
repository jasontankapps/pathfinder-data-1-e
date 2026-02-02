import { useParams } from 'wouter';
import Trap, { test } from './subpages/__trap';
import './Page.css';

type Params = { id?: string };

const TrapPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Trap id={test(id) ? id : "not_found"} />;
};

export default TrapPage;
