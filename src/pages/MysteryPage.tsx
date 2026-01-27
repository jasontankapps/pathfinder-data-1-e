import { useParams } from 'wouter';
import mysteries from './subpages/__mystery';
import './Page.css';

type Data = typeof mysteries;

type Params = { id?: keyof Data };

const MysteryPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? mysteries[id] || mysteries.not_found : mysteries.not_found;

	return <Page />;
};

export default MysteryPage;
