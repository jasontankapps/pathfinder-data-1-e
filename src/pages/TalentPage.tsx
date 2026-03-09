import { useParams } from 'wouter';
import getItem from '../components/getItem';
import talent from './subpages/_GEN_talent';
import slayertalent from './subpages/_GEN_slayertalent';
import phrenicamp from './subpages/_GEN_phrenicamp';
import deed from './subpages/_GEN_deed';
import swashdeed from './subpages/_GEN_swashdeed';
import hkdiscipline from './subpages/_GEN_hkdiscipline';
import rangertrap from './subpages/_GEN_rangertrap';
import BasicTalentPage from './BasicTalentPage';
import { Gen, GenStrict } from '../types';
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

const info: GenStrict<Talent, [string, string]> = {
	"talent": [ "Rogue Talent", "ability/rogue_talents" ],
	"slayertalent": [ "Slayer Talents", "ability/slayer_talents" ],
	"phrenicamp": [ "Phrenic Amplifications", "ability/phrenic_amplifications" ],
	"rangertrap": [ "Ranger Traps", "ability/ranger_traps" ],
	"deed": [ "Gunslinger Deeds", "ability/gunslinger_deeds" ],
	"swashdeed": [ "Swashbuckler Deeds", "ability/swashbuckler_deeds" ],
	"hkdiscipline": [ "Hellknight Disciplines", "ability/hellknight_disciplines" ],
};
const things: Gen<Talent, string> = {};
const addendaObj: GenStrict<string, string> = {
	sneakattack: "This type of talent adds effects to a rogue's sneak attack, and has this limitation: Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made.",
	slayersneak: "This type of talent adds effects to a slayer's sneak attack, and has this limitation: Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made."
};

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {
	const data = allTalents[prefix];

	type Data = typeof data;
	type Params = { id?: keyof Data };

	const { id = "not_found" } = useParams<Params>();
	const { hasJL, title, jsx, topLink, addenda, notBookmarkable, tree } = getItem<Data>(id, data);

	return <BasicTalentPage
		id={id}
		hasJL={hasJL}
		title={title}
		prefix={prefix}
		topLink={topLink}
		topLinkInfo={info}
		notBookmarkable={notBookmarkable}
		tree={tree}
		things={things}
		addenda={addenda}
		addendaObj={addendaObj}
	>{jsx}</BasicTalentPage>;
};

export default TalentPage;
