import { useParams } from 'wouter';
import M1, { test as test1 } from './subpages/__main02';
import M2, { test as test2 } from './subpages/__main03';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Equipment / Tech pages
*/

type Params = { id?: string };

const MainGroup8Page: React.FC = () => {

	const { id = "equipment" } = useParams<Params>();

	if(test1(id)) {
		return <M1 id={id} />;
	}
	if(test2(id)) {
		return <M2 id={id} />;
	}

	return <ErrorPage />;
};

export default MainGroup8Page;
