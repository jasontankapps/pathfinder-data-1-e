import { useParams } from 'wouter';
import curses from './subpages/__oraclecurse';
import './Page.css';

type Params = { id?: string };

const CursePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = curses[id] || curses.not_found;

	return <Page />;
};

export default CursePage;
