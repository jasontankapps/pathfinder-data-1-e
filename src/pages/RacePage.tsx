import { useParams } from 'wouter';
import race1 from './subpages/__race01';
import race2 from './subpages/__race02';
import race3 from './subpages/__race03';
import race4 from './subpages/__race04';
import './Page.css';

type Data =
	typeof race1 | typeof race2 | typeof race3 | typeof race4;

type Params = { id?: keyof Data };

const RacePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = race1[id] || race2[id]
		|| race3[id] || race4[id] || race1.not_found;

	return <Page />;

};

export default RacePage;
