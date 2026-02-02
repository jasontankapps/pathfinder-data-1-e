import { useParams } from 'wouter';
import Discipline, { test } from './subpages/__discipline';
import './Page.css';

type Params = { id?: string };

const DiscliplinePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Discipline id={test(id) ? id : "not_found"} />;
};

export default DiscliplinePage;
