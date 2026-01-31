import { useParams } from 'wouter';
import family1 from './subpages/__family01';
import family2 from './subpages/__family02';
import './Page.css';

type Params = { id?: string };

const MonsterFamilyPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = family1[id] || family2[id] || family1.not_found;

	return <Page />;

};

export default MonsterFamilyPage;
