import { useParams } from 'wouter';
import Arcana, { test } from './subpages/__arcana';
import './Page.css';

type Params = { id?: string };

const ArcanaPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Arcana id={test(id) ? id : "not_found"} />;
};

export default ArcanaPage;
