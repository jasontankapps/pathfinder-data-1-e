import { useParams } from 'wouter';
import constructmods from './subpages/__constructmod';
import './Page.css';

type Data = typeof constructmods;

type Params = { id?: keyof Data };

const ConstructModPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = constructmods[id] || constructmods.not_found;

	return <Page />;
};

export default ConstructModPage;
