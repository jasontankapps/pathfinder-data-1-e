import { useParams } from 'wouter';
import Pclass1, { test as test1 } from './subpages/__pclass01';
import Pclass2, { test as test2 } from './subpages/__pclass02';
import Pclass3, { test as test3 } from './subpages/__pclass03';
import Pclass4, { test as test4 } from './subpages/__pclass04';
import './Page.css';

type Params = { id?: string };

const PrestigeClassPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Pclass1 id={id} />;
	}
	if(test2(id)) {
		return <Pclass2 id={id} />;
	}
	if(test3(id)) {
		return <Pclass3 id={id} />;
	}
	if(test4(id)) {
		return <Pclass4 id={id} />;
	}

	return <Pclass1 id="not_found" />;

};

export default PrestigeClassPage;
