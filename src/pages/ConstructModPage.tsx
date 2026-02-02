import { useParams } from 'wouter';
import Constructmod, { test } from './subpages/__constructmod';
import './Page.css';

type Params = { id?: string };

const ConstructModPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Constructmod id={test(id) ? id : "not_found"} />;
};

export default ConstructModPage;
