import { useParams } from 'wouter';
import Misc, { test } from './subpages/__misc';
import './Page.css';

type Params = { id?: string };

const MiscPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Misc id={test(id) ? id : "not_found"} />;
};

export default MiscPage;
