import { useParams } from 'wouter';
import Def, { test } from './subpages/__spelldef';
import './Page.css';

type Params = { id?: string };

const SpellDefPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Def id={test(id) ? id : "not_found"} />;
};

export default SpellDefPage;
