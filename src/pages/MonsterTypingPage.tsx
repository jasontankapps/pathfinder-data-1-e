import { useParams } from 'wouter';
import MonsterType, { test as test1 } from './subpages/__type';
import MonsterSubtype, { test as test2 } from './subpages/__subtype';
import './Page.css';

type Params = { id?: string };

const MonsterTypingPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <MonsterType id={id} />;
	}
	if(test2(id)) {
		return <MonsterSubtype id={id} />;
	}

	return <MonsterType id="not_found" />;
};

export default MonsterTypingPage;
