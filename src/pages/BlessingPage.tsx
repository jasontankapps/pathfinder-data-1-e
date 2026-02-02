import { useParams } from 'wouter';
import Blessing, { test } from './subpages/__blessing';
import './Page.css';

type Params = { id?: string };

const BlessingPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Blessing id={test(id) ? id : "not_found"} />;
};

export default BlessingPage;
