import { useParams } from 'wouter';
import M1, { test as test1 } from './subpages/__main08';
import M2, { test as test2 } from './subpages/__main09';
import M3, { test as test3 } from './subpages/__main10';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Magic Items pages
*/

type Params = { id?: string };

const MainGroup5Page: React.FC = () => {

	const { id = "magic" } = useParams<Params>();

	if(test1(id)) {
		return <M1 id={id} />;
	}
	if(test2(id)) {
		return <M2 id={id} />;
	}
	if(test3(id)) {
		return <M3 id={id} />;
	}

	return <ErrorPage />;
};

export default MainGroup5Page;
