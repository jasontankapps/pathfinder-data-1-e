import { useParams } from 'wouter';
import m1 from './subpages/__main17';
import m2 from './subpages/__main18';
import m3 from './subpages/__main19';
import m4 from './subpages/__main20';
import m5 from './subpages/__main21';
import m6 from './subpages/__main22';
import m7 from './subpages/__main23';
import m8 from './subpages/__main24';
import m9 from './subpages/__main25';
import m10 from './subpages/__main26';
import m11 from './subpages/__main27';
import m12 from './subpages/__main28';
import m13 from './subpages/__main29';
import m14 from './subpages/__main30';
import m15 from './subpages/__main31';
import m16 from './subpages/__main32';
import m17 from './subpages/__main33';
import m18 from './subpages/__main34';
import m19 from './subpages/__main35';
import ErrorPage from './ErrorPage';
import './Page.css';

/*
	Spells pages
*/


type Params = { id?: string };

const MainGroup2Page: React.FC = () => {

	
	const { id = "spells" } = useParams<Params>();

	const Page = m1[id] || m2[id] || m3[id] || m4[id] || m5[id]
		|| m6[id] || m7[id] || m8[id] || m9[id] ||m10[id]
		|| m11[id] || m12[id] || m13[id] || m14[id] || m15[id]
		|| m16[id] || m17[id] || m18[id] || m19[id];

	if(!Page) {
		return <ErrorPage />;
	}

	return <Page />;
};

export default MainGroup2Page;
