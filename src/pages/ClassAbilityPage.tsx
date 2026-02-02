import { useParams } from 'wouter';
import Ability1, { test as test1 } from './subpages/__ability01';
import Ability2, { test as test2 } from './subpages/__ability02';
import Ability3, { test as test3 } from './subpages/__ability03';
import Ability4, { test as test4 } from './subpages/__ability04';
import Ability5, { test as test5 } from './subpages/__ability05';
import Ability6, { test as test6 } from './subpages/__ability06';
import './Page.css';

type Params = { id?: string };

const ClassAbilityPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Ability1 id={id} />;
	}
	if(test2(id)) {
		return <Ability2 id={id} />;
	}
	if(test3(id)) {
		return <Ability3 id={id} />;
	}
	if(test4(id)) {
		return <Ability4 id={id} />;
	}
	if(test5(id)) {
		return <Ability5 id={id} />;
	}
	if(test6(id)) {
		return <Ability6 id={id} />;
	}

	return <Ability1 id="not_found" />;

};

export default ClassAbilityPage;
