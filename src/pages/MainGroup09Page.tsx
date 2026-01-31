import { useParams } from 'wouter';
import m1 from './subpages/__main01';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Main pages
*/


type Params = { id?: string };

const MainGroup9Page: React.FC = () => {

	
	const { id = "main" } = useParams<Params>();

	const Page = m1[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup9Page;
