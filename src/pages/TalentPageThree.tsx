import { useParams } from 'wouter';
import hex from './subpages/__hex';
import patron from './subpages/__patron';
import shamanhex from './subpages/__shamanhex';
import evolution from './subpages/__evolution';
import unchevolution from './subpages/__unchevolution';
import eidolon from './subpages/__eidolon';
import './Page.css';

const allTalents = {
	hex,
	patron,
	shamanhex,
	evolution,
	unchevolution,
	eidolon
};

type Talent = keyof typeof allTalents;

type Data =
	typeof hex | typeof patron | typeof shamanhex
	| typeof evolution | typeof unchevolution | typeof eidolon;

type Params = { id?: keyof Data };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id } = useParams<Params>();

	const Page = id && allTalents[prefix][id] || allTalents[prefix].not_found;

	return <Page />;
};

export default TalentPage;
