import { useParams } from 'wouter';
import Haunt, { test } from './subpages/__haunt';
import './Page.css';

type Params = { id?: string };

const HauntPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Haunt id={test(id) ? id : "not_found"} />;
};

export default HauntPage;
