import { useParams } from 'wouter';
import mysteries from './subpages/__mystery';
import './Page.css';

type Params = { id?: string };

const MysteryPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = mysteries[id] || mysteries.not_found;

	return <Page />;
};

export default MysteryPage;
