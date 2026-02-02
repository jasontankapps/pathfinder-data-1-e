import { useParams } from 'wouter';
import Curse, { test } from './subpages/__oraclecurse';
import './Page.css';

type Params = { id?: string };

const CursePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Curse id={test(id) ? id : "not_found"} />;
};

export default CursePage;
