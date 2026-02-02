import { useParams } from 'wouter';
import Class1, { test as test1 } from './subpages/__class01';
import Class2, { test as test2 } from './subpages/__class02';
import Class3, { test as test3 } from './subpages/__class03';
import Class4, { test as test4 } from './subpages/__class04';
import Class5, { test as test5 } from './subpages/__class05';
import Class6, { test as test6 } from './subpages/__class06';
import Class7, { test as test7 } from './subpages/__class07';
import Class8, { test as test8 } from './subpages/__class08';
import './Page.css';

type Params = { id?: string };

const ClassPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Class1 id={id} />;
	}
	if(test2(id)) {
		return <Class2 id={id} />;
	}
	if(test3(id)) {
		return <Class3 id={id} />;
	}
	if(test4(id)) {
		return <Class4 id={id} />;
	}
	if(test5(id)) {
		return <Class5 id={id} />;
	}
	if(test6(id)) {
		return <Class6 id={id} />;
	}
	if(test7(id)) {
		return <Class7 id={id} />;
	}
	if(test8(id)) {
		return <Class8 id={id} />;
	}

	return <Class1 id="not_found" />;

};

export default ClassPage;
