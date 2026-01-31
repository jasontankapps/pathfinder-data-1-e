import { useParams } from 'wouter';
import m1 from './subpages/__main11';
import m2 from './subpages/__main12';
import m3 from './subpages/__main13';
import m4 from './subpages/__main14';
import m5 from './subpages/__main15';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Monsters pages
*/


type Params = { id?: string };

const MainGroup4Page: React.FC = () => {

	
	const { id = "monsters" } = useParams<Params>();

	const Page = m1[id] || m2[id] || m3[id] || m4[id] || m5[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup4Page;
