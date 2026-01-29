import { useParams } from 'wouter';
import trick from './subpages/__trick';
import stare from './subpages/__stare';
import discovery from './subpages/__discovery';
import arcanedisc from './subpages/__arcanedisc';
import mercy from './subpages/__mercy';
import performance from './subpages/__performance';
import './Page.css';

const allTalents = {
	trick,
	stare,
	discovery,
	arcanedisc,
	mercy,
	performance
};

type Talent = keyof typeof allTalents;

type Data =
	typeof trick | typeof stare | typeof discovery
	| typeof arcanedisc | typeof mercy | typeof performance;

type Params = { id?: keyof Data };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id = "not_found" } = useParams<Params>();

	const Page = allTalents[prefix][id] || allTalents[prefix].not_found;

	return <Page />;
};

export default TalentPage;
