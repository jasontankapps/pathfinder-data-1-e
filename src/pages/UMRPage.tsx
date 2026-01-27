import { useParams } from 'wouter';
import umr from './subpages/__umr';
import './Page.css';

type Data = typeof umr;

type Params = { id?: keyof Data };

const UMRPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? umr[id] || umr.not_found : umr.not_found;

	return <Page />;
};

export default UMRPage;
