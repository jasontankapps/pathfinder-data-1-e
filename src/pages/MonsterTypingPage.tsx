import { useParams } from 'wouter';
import monster_types from './subpages/__type';
import monster_subtypes from './subpages/__subtype';
import './Page.css';

type Params = { id?: string };

const MonsterTypingPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = monster_types[id] || monster_subtypes[id] || monster_types.not_found;

	return <Page />;
};

export default MonsterTypingPage;
