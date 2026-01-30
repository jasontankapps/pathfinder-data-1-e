import { useParams } from 'wouter';
import m1 from './subpages/__main36';
import m2 from './subpages/__main37';
import m3 from './subpages/__main38';
import m4 from './subpages/__main39';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Traits pages
*/


type Data = typeof m1 | typeof m2 | typeof m3 | typeof m4;

type Params = { id?: keyof Data };

const MainGroup1Page: React.FC = () => {
	console.log(1);

	const { id = "traits" } = useParams<Params>();

	const Page = m1[id] || m2[id] || m3[id] || m4[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup1Page;
