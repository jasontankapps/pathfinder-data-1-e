import { useParams } from 'wouter';
import M1, { test as test1 } from './subpages/__main17';
import M2, { test as test2 } from './subpages/__main18';
import M3, { test as test3 } from './subpages/__main19';
import M4, { test as test4 } from './subpages/__main20';
import M5, { test as test5 } from './subpages/__main21';
import M6, { test as test6 } from './subpages/__main22';
import M7, { test as test7 } from './subpages/__main23';
import M8, { test as test8 } from './subpages/__main24';
import M9, { test as test9 } from './subpages/__main25';
import M10, { test as test10 } from './subpages/__main26';
import M11, { test as test11 } from './subpages/__main27';
import M12, { test as test12 } from './subpages/__main28';
import M13, { test as test13 } from './subpages/__main29';
import M14, { test as test14 } from './subpages/__main30';
import M15, { test as test15 } from './subpages/__main31';
import M16, { test as test16 } from './subpages/__main32';
import M17, { test as test17 } from './subpages/__main33';
import M18, { test as test18 } from './subpages/__main34';
import M19, { test as test19 } from './subpages/__main35';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Spells pages
*/

type Params = { id?: string };

const MainGroup2Page: React.FC = () => {

	const { id = "spells" } = useParams<Params>();

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
	if(test6(id)) {
		return <M6 id={id} />;
	}
	if(test7(id)) {
		return <M7 id={id} />;
	}
	if(test8(id)) {
		return <M8 id={id} />;
	}
	if(test9(id)) {
		return <M9 id={id} />;
	}
	if(test10(id)) {
		return <M10 id={id} />;
	}
	if(test11(id)) {
		return <M11 id={id} />;
	}
	if(test12(id)) {
		return <M12 id={id} />;
	}
	if(test13(id)) {
		return <M13 id={id} />;
	}
	if(test14(id)) {
		return <M14 id={id} />;
	}
	if(test15(id)) {
		return <M15 id={id} />;
	}
	if(test16(id)) {
		return <M16 id={id} />;
	}
	if(test17(id)) {
		return <M17 id={id} />;
	}
	if(test18(id)) {
		return <M18 id={id} />;
	}
	if(test19(id)) {
		return <M19 id={id} />;
	}

	return <ErrorPage />;
};

export default MainGroup2Page;
