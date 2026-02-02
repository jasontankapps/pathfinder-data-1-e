import { useParams } from 'wouter';
import Trait1, { test as test1 } from './subpages/__trait01';
import Trait2, { test as test2 } from './subpages/__trait02';
import Trait3, { test as test3 } from './subpages/__trait03';
import Trait4, { test as test4 } from './subpages/__trait04';
import Trait5, { test as test5 } from './subpages/__trait05';
import './Page.css';

type Params = { id?: string };

const TraitPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Trait1 id={id} />;
	}
	if(test2(id)) {
		return <Trait2 id={id} />;
	}
	if(test3(id)) {
		return <Trait3 id={id} />;
	}
	if(test4(id)) {
		return <Trait4 id={id} />;
	}
	if(test5(id)) {
		return <Trait5 id={id} />;
	}

	return <Trait1 id="not_found" />;

};

export default TraitPage;
