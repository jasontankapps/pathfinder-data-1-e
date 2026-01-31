import { useParams } from 'wouter';
import misc from './subpages/__misc';
import './Page.css';

type Params = { id?: string };

const MiscPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = misc[id] || misc.not_found;

	return <Page />;
};

export default MiscPage;
