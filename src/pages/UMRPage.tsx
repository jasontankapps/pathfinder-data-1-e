import { useParams } from 'wouter';
import Umr, { test } from './subpages/__umr';
import './Page.css';

type Params = { id?: string };

const UMRPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Umr id={test(id) ? id : "not_found"} />;
};

export default UMRPage;
