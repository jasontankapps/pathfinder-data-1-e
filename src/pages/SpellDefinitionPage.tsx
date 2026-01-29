import { useParams } from 'wouter';
import defs from './subpages/__spelldef';
import './Page.css';

type Data = typeof defs;

type Params = { id?: keyof Data };

const SpellDefPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = defs[id] || defs.not_found;

	return <Page />;
};

export default SpellDefPage;
