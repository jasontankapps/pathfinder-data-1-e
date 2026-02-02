import { useParams } from 'wouter';
import School, { test } from './subpages/__arcaneschool';
import './Page.css';

type Params = { id?: string };

const SchoolPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <School id={test(id) ? id : "not_found"} />;
};

export default SchoolPage;
