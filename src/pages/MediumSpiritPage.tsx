import { useParams } from 'wouter';
import spirits from './subpages/__spirit';
import './Page.css';

type Data = typeof spirits;

type Params = { id?: keyof Data };

const MediumSpiritPage: React.FC = () => {
	const { id = "not_found" } = useParams<Params>();

	const Page = spirits[id] || spirits.not_found;

	return <Page />;
};

export default MediumSpiritPage;
