import { useParams } from 'wouter';
import traps from './subpages/__trap';
import './Page.css';

type Params = { id?: string };

const TrapPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = traps[id] || traps.not_found;

	return <Page />;
};

export default TrapPage;
