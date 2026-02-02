import { useParams } from 'wouter';
import Ragepower, { test } from './subpages/__ragepower';
import './Page.css';

type Params = { id?: string };

const RagePowerPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Ragepower id={test(id) ? id : "not_found"} />;
};

export default RagePowerPage;
