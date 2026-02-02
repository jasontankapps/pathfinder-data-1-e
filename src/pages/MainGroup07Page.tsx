import { useParams } from 'wouter';
import M1, { test } from './subpages/__main04';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Faiths, UMR, Spell groupings pages
*/

type Params = { id?: string };

const MainGroup7Page: React.FC = () => {

	const { id = "faiths" } = useParams<Params>();

	return test(id) ? <M1 id={id} /> : <ErrorPage />;
};

export default MainGroup7Page;
