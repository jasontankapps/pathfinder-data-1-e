import { useParams } from 'wouter';
import Emotionalfocus, { test } from './subpages/__emotionalfocus';
import './Page.css';

type Params = { id?: string };

const ArcanaPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Emotionalfocus id={test(id) ? id : "not_found"} />;
};

export default ArcanaPage;
