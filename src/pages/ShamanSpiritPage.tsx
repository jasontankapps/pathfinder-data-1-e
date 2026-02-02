import { useParams } from 'wouter';
import Spirit, { test } from './subpages/__shamanspirit';
import './Page.css';

type Params = { id?: string };

const ShamanSpiritPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Spirit id={test(id) ? id : "not_found"} />;
};

export default ShamanSpiritPage;
