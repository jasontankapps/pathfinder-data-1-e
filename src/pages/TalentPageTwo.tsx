import { useParams } from 'wouter';
import invtalent from './subpages/__invtalent';
import soctalent from './subpages/__soctalent';
import vigtalent from './subpages/__vigtalent';
import ninjatrick from './subpages/__ninjatrick';
import kipower from './subpages/__kipower';
import stylestrike from './subpages/__stylestrike';
import './Page.css';

const allTalents = {
	invtalent,
	soctalent,
	vigtalent,
	ninjatrick,
	kipower,
	stylestrike
};

type Talent = keyof typeof allTalents;

type Params = { id?: string };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id = "not_found" } = useParams<Params>();

	const Page = allTalents[prefix][id] || allTalents[prefix].not_found;

	return <Page />;
};

export default TalentPage;
