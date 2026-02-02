import { useParams } from 'wouter';
import Race1, { test as test1 } from './subpages/__race01';
import Race2, { test as test2 } from './subpages/__race02';
import Race3, { test as test3 } from './subpages/__race03';
import Race4, { test as test4 } from './subpages/__race04';
import './Page.css';

type Params = { id?: string };

const RacePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Race1 id={id} />;
	}
	if(test2(id)) {
		return <Race2 id={id} />;
	}
	if(test3(id)) {
		return <Race3 id={id} />;
	}
	if(test4(id)) {
		return <Race4 id={id} />;
	}

	return <Race1 id="not_found" />;

};

export default RacePage;
