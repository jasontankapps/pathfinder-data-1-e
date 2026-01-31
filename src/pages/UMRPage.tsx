import { useParams } from 'wouter';
import umr from './subpages/__umr';
import './Page.css';

type Params = { id?: string };

const UMRPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = umr[id] || umr.not_found;

	return <Page />;
};

export default UMRPage;
