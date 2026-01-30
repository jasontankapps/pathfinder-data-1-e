import { useParams } from 'wouter';
import m1 from './subpages/__main01';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Main pages
*/


type Data = typeof m1;

type Params = { id?: keyof Data };

const MainGroup9Page: React.FC = () => {
	console.log(9);

	const { id = "main" } = useParams<Params>();

	const Page = m1[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup9Page;
