import { useParams } from 'wouter';
import ragepowers from './subpages/__ragepower';
import './Page.css';

type Data = typeof ragepowers;

type Params = { id?: keyof Data };

const RagePowerPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = ragepowers[id] || ragepowers.not_found;

	return <Page />;
};

export default RagePowerPage;
