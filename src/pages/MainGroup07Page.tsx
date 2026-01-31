import { useParams } from 'wouter';
import m1 from './subpages/__main04';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Faiths, UMR, Spell groupings pages
*/


type Params = { id?: string };

const MainGroup7Page: React.FC = () => {

	
	const { id = "faiths" } = useParams<Params>();

	const Page = m1[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup7Page;
