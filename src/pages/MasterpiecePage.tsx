import { useParams } from 'wouter';
import Masterpiece, { test } from './subpages/__masterpiece';
import './Page.css';

type Params = { id?: string };

const MasterpiecePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Masterpiece id={test(id) ? id : "not_found"} />;
};

export default MasterpiecePage;
