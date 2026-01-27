import { useParams } from 'wouter';
import domains1 from './subpages/__domain01';
import domains2 from './subpages/__domain02';
import './Page.css';

type Data = typeof domains1 | typeof domains2;

type Params = { id?: keyof Data };

const DomainPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id && (domains1[id] || domains2[id]) || domains1.not_found;

	return <Page />;

};

export default DomainPage;
