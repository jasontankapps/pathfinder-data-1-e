import { useParams } from 'wouter';
import curses from './subpages/__oraclecurse';
import './Page.css';

type Data = typeof curses;

type Params = { id?: keyof Data };

const CursePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? curses[id] || curses.not_found : curses.not_found;

	return <Page />;
};

export default CursePage;
