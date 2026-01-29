import { useParams } from 'wouter';
import umr from './subpages/__umr';
import './Page.css';

type Data = typeof umr;

type Params = { id?: keyof Data };

const UMRPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = umr[id] || umr.not_found;

	return <Page />;
};

export default UMRPage;
