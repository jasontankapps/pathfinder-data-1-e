import { useParams } from 'wouter';
import M1, { test } from './subpages/__main01';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Main pages
*/

type Params = { id?: string };

const MainGroup9Page: React.FC = () => {
	
	const { id = "main" } = useParams<Params>();

	return test(id) ? <M1 id={id} /> : <ErrorPage />;
};

export default MainGroup9Page;
