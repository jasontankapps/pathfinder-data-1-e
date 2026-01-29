import { useParams } from 'wouter';
import ability1 from './subpages/__ability01';
import ability2 from './subpages/__ability02';
import ability3 from './subpages/__ability03';
import ability4 from './subpages/__ability04';
import ability5 from './subpages/__ability05';
import ability6 from './subpages/__ability06';
import './Page.css';

type Data = typeof ability1 | typeof ability2 | typeof ability3 | typeof ability4 | typeof ability5 | typeof ability6;

type Params = { id?: keyof Data };

const ClassAbilityPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = ability1[id] || ability2[id] || ability3[id]
		|| ability4[id] || ability5[id] || ability6[id]
		|| ability1.not_found;

	return <Page />;

};

export default ClassAbilityPage;
