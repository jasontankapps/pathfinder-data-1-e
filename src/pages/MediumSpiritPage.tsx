import { useParams } from 'wouter';
import MediumSpirit, { test } from './subpages/__spirit';
import './Page.css';

type Params = { id?: string };

const MediumSpiritPage: React.FC = () => {
	const { id = "not_found" } = useParams<Params>();

	return <MediumSpirit id={test(id) ? id : "not_found"} />;
};

export default MediumSpiritPage;
