import { useParams } from 'wouter';
import Bloodline, { test } from './subpages/__sorcbloodline';
import './Page.css';

type Params = { id?: string };

const SorcererBloodlinePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Bloodline id={test(id) ? id : "not_found"} />;
};

export default SorcererBloodlinePage;
