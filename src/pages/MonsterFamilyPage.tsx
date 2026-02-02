import { useParams } from 'wouter';
import Family1, { test as test1 } from './subpages/__family01';
import Family2, { test as test2 } from './subpages/__family02';
import './Page.css';

type Params = { id?: string };

const MonsterFamilyPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Family1 id={id} />;
	}
	if(test2(id)) {
		return <Family2 id={id} />;
	}

	return <Family1 id="not_found" />;

};

export default MonsterFamilyPage;
