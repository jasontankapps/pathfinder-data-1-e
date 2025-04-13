import { ReactElement } from 'react';
import { useParams } from 'wouter';
import getItem from '../components/getItem';
import talent from './subpages/__talent';
import slayertalent from './subpages/__slayertalent';
import investigatortalent from './subpages/__investigatortalent';
import socialtalent from './subpages/__socialtalent';
import vigilantetalent from './subpages/__vigilantetalent';
import trick from './subpages/__trick';
import stare from './subpages/__stare';
import ninjatrick from './subpages/__ninjatrick';
import phrenicamp from './subpages/__phrenicamp';
import deed from './subpages/__deed';
import swashdeed from './subpages/__swashdeed';
import hkdiscipline from './subpages/__hkdiscipline';
import hex from './subpages/__hex';
import shamanhex from './subpages/__shamanhex';
import discovery from './subpages/__discovery';
import arcanediscovery from './subpages/__arcanediscovery';
import BasicPage from './BasicPage';
import './Page.css';

const allTalents = {
	talent,
	slayertalent,
	investigatortalent,
	socialtalent,
	vigilantetalent,
	trick,
	stare,
	ninjatrick,
	phrenicamp,
	deed,
	swashdeed,
	hkdiscipline,
	hex,
	shamanhex,
	discovery,
	arcanediscovery
};

type Talent = keyof typeof allTalents;

const info: { [key in Talent]: [string, string] } = {
	"talent": [ "Rogue Talent", "ability/rogue_talents" ],
	"slayertalent": [ "Slayer Talents", "ability/slayer_talents" ],
	"socialtalent": [ "Social Talents", "ability/social_talents" ],
	"vigilantetalent": [ "Vigilante Talents", "ability/vigilante_talents" ],
	"investigatortalent": [ "Investigator Talents", "ability/investigator_talents" ],
	"ninjatrick": [ "Ninja Tricks", "ability/ninja_tricks" ],
	"trick": [ "Mesmerist Tricks", "ability/tricks" ],
	"stare": [ "Mesmerist Stares", "ability/stares" ],
	"hex": [ "Witch Hexes", "ability/hexes" ],
	"shamanhex": [ "Shaman Hexes", "ability/shaman_hexes" ],
	"discovery": [ "Alchemist Discoveries", "ability/discoveries" ],
	"arcanediscovery": [ "Arcane Discovery", "ability/arcane_discoveries" ],
	"phrenicamp": [ "Phrenic Amplifications", "ability/phrenic_amplifications" ],
	"deed": [ "Gunslinger Deeds", "ability/gunslinger_deeds" ],
	"swashdeed": [ "Swashbuckler Deeds", "ability/swashbuckler_deeds" ],
	"hkdiscipline": [ "Hellknight Disciplines", "ability/hellknight_disciplines" ],
};
//	"kipower": [ "Ki Powers", "ability/ki_powers" ],
//	"stylestrike": [ "Style Strikes", "ability/style_strikes" ]
//	"evolution": [ "Eidolon Evolutions", "ability/evolutions" ],
//	"unchainedevolution": [ "Unchained Eidolon Evolutions", "ability/unchained_evolutions" ],
//	"eidolon": [ "Unchained Eidolon Subtypes", "ability/unchained_eidolon_subtypes" ],
//	"patron": [ "Witch Patrons", "ability/patrons" ],
//	"trap": [ "Ranger Traps", "ability/ranger_traps" ],

const addendaObj: { [key: string]: string } = {
	sneakattack: "This type of talent adds effects to a rogue's sneak attack, and has this limitation: Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made.",
	studiedstrike: "This type of talent adds effects to an investigator's studied combat or studied strike, and has this limitation: Only one of these talents can be applied to an individual attack, but the decision can be made when the damage is dealt.",
	avenger: "This talent can only be taken by avenger vigilantes.",
	stalker: "This talent can only be taken by stalker vigilantes.",
	hiddenstrike: "This type of talent can only be taken by stalker vigilantes, and it has a limitation: only one talent of this type can be added to a given hidden strike, and only when that hidden strike is dealt against a foe that is unaware of the stalker vigilante's presence (or who considers him an ally), unless otherwise noted.",
	devilbane: "Devilbane gazes tend to be more limited in their scope than standard bold stare improvements, but cut to the core of an outsider's being. When a devilbane gaze is used against a creature with the outsider type, double the hypnotic stare penalty applied by the devilbane gaze improvement (but not the Will save penalty the original hypnotic stare imposes). Despite their moniker, devilbane gazes affect all outsiders equally well."
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
