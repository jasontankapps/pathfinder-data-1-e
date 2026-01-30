import { useParams } from 'wouter';
import m1 from './subpages/__main08';
import m2 from './subpages/__main09';
import m3 from './subpages/__main10';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Magic Items pages
*/


type Data = typeof m1 | typeof m2 | typeof m3;

type Params = { id?: keyof Data };

const MainGroup5Page: React.FC = () => {
	console.log(5);

	const { id = "magic" } = useParams<Params>();

	const Page = m1[id] || m2[id] || m3[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup5Page;
