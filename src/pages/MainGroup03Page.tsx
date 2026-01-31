import { useParams } from 'wouter';
import m1 from './subpages/__main16';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	NPCs pages
*/


type Params = { id?: string };

const MainGroup3Page: React.FC = () => {

	
	const { id = "npcs" } = useParams<Params>();

	const Page = m1[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup3Page;
