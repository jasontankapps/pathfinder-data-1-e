import { useParams } from 'wouter';
import traps from './subpages/__trap';
import './Page.css';

type Data = typeof traps;

type Params = { id?: keyof Data };

const TrapPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? traps[id] || traps.not_found : traps.not_found;

	return <Page />;
};

export default TrapPage;
