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

type Data =
	typeof talent | typeof slayertalent | typeof phrenicamp
	| typeof deed | typeof swashdeed | typeof hkdiscipline
	| typeof rangertrap;

type Params = { id?: keyof Data };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id } = useParams<Params>();

	const Page = id && allTalents[prefix][id] || allTalents[prefix].not_found;

	return <Page />;
};

export default TalentPage;
