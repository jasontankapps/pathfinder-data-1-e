import { useParams } from 'wouter';
import Mystery, { test } from './subpages/__mystery';
import './Page.css';

type Params = { id?: string };

const MysteryPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Mystery id={test(id) ? id : "not_found"} />;
};

export default MysteryPage;
