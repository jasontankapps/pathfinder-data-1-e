import { useParams } from 'wouter';
import talents from './subpages/__kinetic';
import './Page.css';

type Data = typeof talents;

type Params = { id?: keyof Data };

const KineticPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? talents[id] || talents.not_found : talents.not_found;

	return <Page />;
};

export default KineticPage;
