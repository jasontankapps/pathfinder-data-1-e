import { useParams } from 'wouter';
import Magic, { test } from './subpages/__magic-ring';
import './Page.css';

type Params = { id?: string };

const MagicPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Magic id={test(id) ? id : "not_found"} />;
};

export default MagicPage;
