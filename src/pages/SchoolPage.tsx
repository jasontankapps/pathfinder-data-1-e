import { useParams } from 'wouter';
import schools from './subpages/__arcaneschool';
import './Page.css';

type Data = typeof schools;

type Params = { id?: keyof Data };

const SchoolPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? schools[id] || schools.not_found : schools.not_found;

	return <Page />;
};

export default SchoolPage;
