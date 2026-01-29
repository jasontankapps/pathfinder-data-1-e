import { useParams } from 'wouter';
import blessings from './subpages/__blessing';
import './Page.css';

type Data = typeof blessings;

type Params = { id?: keyof Data };

const BlessingPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = blessings[id] || blessings.not_found;

	return <Page />;
};

export default BlessingPage;
