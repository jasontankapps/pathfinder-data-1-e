import { useParams } from 'wouter';
import M1, { test as test1 } from './subpages/__main11';
import M2, { test as test2 } from './subpages/__main12';
import M3, { test as test3 } from './subpages/__main13';
import M4, { test as test4 } from './subpages/__main14';
import M5, { test as test5 } from './subpages/__main15';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Monsters pages
*/

type Params = { id?: string };

const MainGroup4Page: React.FC = () => {

	const { id = "monsters" } = useParams<Params>();

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
	if(test5(id)) {
		return <M5 id={id} />;
	}

	return <ErrorPage />;
};

export default MainGroup4Page;
