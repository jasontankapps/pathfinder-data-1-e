import { useParams } from 'wouter';
import faith1 from './subpages/__faith01';
import faith2 from './subpages/__faith02';
import faith3 from './subpages/__faith03';
import faith4 from './subpages/__faith04';
import faith5 from './subpages/__faith05';
import faith6 from './subpages/__faith06';
import faith7 from './subpages/__faith07';
import faith8 from './subpages/__faith08';
import faith9 from './subpages/__faith09';
import './Page.css';

type Data =
	typeof faith1 | typeof faith2 | typeof faith3
	| typeof faith4 | typeof faith5 | typeof faith6
	| typeof faith7 | typeof faith8 | typeof faith9;

type Params = { id?: keyof Data };

const FaithPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = faith1[id] || faith2[id] || faith3[id]
		|| faith4[id] || faith5[id] || faith6[id]
		|| faith7[id] || faith8[id] || faith9[id]
		|| faith1.not_found;

	return <Page />;

};

export default FaithPage;
