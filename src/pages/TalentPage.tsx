import { ReactElement } from 'react';
import { useParams } from 'wouter';
import getItem from '../components/getItem';
import talent from './subpages/__talent';
import slayertalent from './subpages/__slayertalent';
import phrenicamp from './subpages/__phrenicamp';
import deed from './subpages/__deed';
import swashdeed from './subpages/__swashdeed';
import hkdiscipline from './subpages/__hkdiscipline';
import rangertrap from './subpages/__rangertrap';
import BasicPage from './BasicPage';
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

const info: { [key in Talent]: [string, string] } = {
	"talent": [ "Rogue Talent", "ability/rogue_talents" ],
	"slayertalent": [ "Slayer Talents", "ability/slayer_talents" ],
	"phrenicamp": [ "Phrenic Amplifications", "ability/phrenic_amplifications" ],
	"rangertrap": [ "Ranger Traps", "ability/ranger_traps" ],
	"deed": [ "Gunslinger Deeds", "ability/gunslinger_deeds" ],
	"swashdeed": [ "Swashbuckler Deeds", "ability/swashbuckler_deeds" ],
	"hkdiscipline": [ "Hellknight Disciplines", "ability/hellknight_disciplines" ],
};

const addendaObj: { [key: string]: string } = {
	sneakattack: "This type of talent adds effects to a rogue's sneak attack, and has this limitation: Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made.",
	slayersneak: "This type of talent adds effects to a slayer's sneak attack, and has this limitation: Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made."
};

const getAddenda = (input: string[], jsx: ReactElement, id: string) => {
	const found: ReactElement[] = [];
	input.forEach(bit => {
		if(addendaObj[bit]) {
			found.push(<aside key={`${id}-addenda:${bit}`}><p><em>{addendaObj[bit]}</em></p></aside>);
		}
	});
	if(found.length >= 1) {
		return <>{jsx}{found}</>;
	}
	return jsx;
};

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const data = allTalents[prefix];

	type Data = typeof data;
	type Params = { id?: keyof Data };

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, topLink, addenda } = getItem<Data>(id, data);

	const output = addenda ? getAddenda(addenda, jsx, id || "not_found") : jsx;

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={`/${prefix}/${id}`}
		topLink={topLink || info[prefix]}
	>{output}</BasicPage>;
};

export default TalentPage;
