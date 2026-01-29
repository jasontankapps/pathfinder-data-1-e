import { useParams } from 'wouter';
import misc from './subpages/__misc';
import './Page.css';

type Data = typeof misc;

type Params = { id?: keyof Data };

const MiscPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = misc[id] || misc.not_found;

	return <Page />;
};

export default MiscPage;
