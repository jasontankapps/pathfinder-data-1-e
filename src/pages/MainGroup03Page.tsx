import { useParams } from 'wouter';
import m1 from './subpages/__main16';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	NPCs pages
*/


type Data = typeof m1;

type Params = { id?: keyof Data };

const MainGroup3Page: React.FC = () => {
	console.log(3);

	const { id = "npcs" } = useParams<Params>();

	const Page = m1[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup3Page;
