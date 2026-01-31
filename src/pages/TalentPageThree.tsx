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

type Params = { id?: string };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id = "not_found" } = useParams<Params>();

	const Page = allTalents[prefix][id] || allTalents[prefix].not_found;

	return <Page />;
};

export default TalentPage;
