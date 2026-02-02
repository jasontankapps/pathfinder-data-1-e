import { useParams } from 'wouter';
import M1, { test as test1 } from './subpages/__main36';
import M2, { test as test2 } from './subpages/__main37';
import M3, { test as test3 } from './subpages/__main38';
import M4, { test as test4 } from './subpages/__main39';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Traits pages
*/

type Params = { id?: string };

const MainGroup1Page: React.FC = () => {

	const { id = "traits" } = useParams<Params>();

	if(test1(id)) {
		return <M1 id={id} />;
	}
	if(test2(id)) {
		return <M2 id={id} />;
	}
	if(test3(id)) {
		return <M3 id={id} />;
	}
	if(test4(id)) {
		return <M4 id={id} />;
	}

	return <ErrorPage />;
};

export default MainGroup1Page;
