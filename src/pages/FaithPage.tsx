import { useParams } from 'wouter';
import Faith1, { test as test1 } from './subpages/__faith01';
import Faith2, { test as test2 } from './subpages/__faith02';
import Faith3, { test as test3 } from './subpages/__faith03';
import Faith4, { test as test4 } from './subpages/__faith04';
import Faith5, { test as test5 } from './subpages/__faith05';
import Faith6, { test as test6 } from './subpages/__faith06';
import Faith7, { test as test7 } from './subpages/__faith07';
import Faith8, { test as test8 } from './subpages/__faith08';
import Faith9, { test as test9 } from './subpages/__faith09';
import './Page.css';

type Params = { id?: string };

const FaithPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Faith1 id={id} />;
	}
	if(test2(id)) {
		return <Faith2 id={id} />;
	}
	if(test3(id)) {
		return <Faith3 id={id} />;
	}
	if(test4(id)) {
		return <Faith4 id={id} />;
	}
	if(test5(id)) {
		return <Faith5 id={id} />;
	}
	if(test6(id)) {
		return <Faith6 id={id} />;
	}
	if(test7(id)) {
		return <Faith7 id={id} />;
	}
	if(test8(id)) {
		return <Faith8 id={id} />;
	}
	if(test9(id)) {
		return <Faith9 id={id} />;
	}

	return <Faith1 id="not_found" />;

};

export default FaithPage;
