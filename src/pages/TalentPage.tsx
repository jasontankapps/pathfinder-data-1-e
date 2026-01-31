import { useParams } from 'wouter';
import talent from './subpages/__talent';
import slayertalent from './subpages/__slayertalent';
import phrenicamp from './subpages/__phrenicamp';
import deed from './subpages/__deed';
import swashdeed from './subpages/__swashdeed';
import hkdiscipline from './subpages/__hkdiscipline';
import rangertrap from './subpages/__rangertrap';
import './Page.css';

const allTalents = {
	talent,
	slayertalent,
	phrenicamp,
	deed,
	swashdeed,
	hkdiscipline,
	rangertrap
};

type Talent = keyof typeof allTalents;

type Params = { id?: string };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id = "not_found" } = useParams<Params>();

	const Page = allTalents[prefix][id] || allTalents[prefix].not_found;

	return <Page />;
};

export default TalentPage;
