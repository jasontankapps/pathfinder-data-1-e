import { useParams } from 'wouter';
import M1, { test } from './subpages/__main16';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	NPCs pages
*/

type Params = { id?: string };

const MainGroup3Page: React.FC = () => {
	
	const { id = "npcs" } = useParams<Params>();

	return test(id) ? <M1 id={id} /> : <ErrorPage />;
};

export default MainGroup3Page;
