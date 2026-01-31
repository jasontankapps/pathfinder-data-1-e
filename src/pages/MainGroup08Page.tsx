import { useParams } from 'wouter';
import m1 from './subpages/__main02';
import m2 from './subpages/__main03';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Equipment / Tech pages
*/


type Params = { id?: string };

const MainGroup8Page: React.FC = () => {

	
	const { id = "equipment" } = useParams<Params>();

	const Page = m1[id] || m2[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup8Page;
