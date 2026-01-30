import { useParams } from 'wouter';
import m1 from './subpages/__main05';
import m2 from './subpages/__main06';
import m3 from './subpages/__main07';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Feats pages
*/


type Data = typeof m1 | typeof m2 | typeof m3;

type Params = { id?: keyof Data };

const MainGroup6Page: React.FC = () => {
	console.log(6);

	const { id = "feats" } = useParams<Params>();

	const Page = m1[id] || m2[id] || m3[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup6Page;
