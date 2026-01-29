import { useParams } from 'wouter';
import talents from './subpages/__kinetic';
import './Page.css';

type Data = typeof talents;

type Params = { id?: keyof Data };

const KineticPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = talents[id] || talents.not_found;

	return <Page />;
};

export default KineticPage;
