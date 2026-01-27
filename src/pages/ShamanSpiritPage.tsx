import { useParams } from 'wouter';
import spirits from './subpages/__shamanspirit';
import './Page.css';

type Data = typeof spirits;

type Params = { id?: keyof Data };

const ShamanSpiritPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? spirits[id] || spirits.not_found : spirits.not_found;

	return <Page />;
};

export default ShamanSpiritPage;
