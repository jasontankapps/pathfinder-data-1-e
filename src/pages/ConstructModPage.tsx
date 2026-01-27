import { useParams } from 'wouter';
import constructmods from './subpages/__constructmod';
import './Page.css';

type Data = typeof constructmods;

type Params = { id?: keyof Data };

const ConstructModPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? constructmods[id] || constructmods.not_found : constructmods.not_found;

	return <Page />;
};

export default ConstructModPage;
