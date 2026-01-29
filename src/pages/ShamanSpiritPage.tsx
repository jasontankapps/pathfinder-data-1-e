import { useParams } from 'wouter';
import spirits from './subpages/__shamanspirit';
import './Page.css';

type Data = typeof spirits;

type Params = { id?: keyof Data };

const ShamanSpiritPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = spirits[id] || spirits.not_found;

	return <Page />;
};

export default ShamanSpiritPage;
