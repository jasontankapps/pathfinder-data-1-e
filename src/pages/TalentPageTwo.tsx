import { useParams } from 'wouter';
import getItem from '../components/getItem';
import invtalent from './subpages/_GEN_invtalent';
import soctalent from './subpages/_GEN_soctalent';
import vigtalent from './subpages/_GEN_vigtalent';
import ninjatrick from './subpages/_GEN_ninjatrick';
import kipower from './subpages/_GEN_kipower';
import stylestrike from './subpages/_GEN_stylestrike';
import BasicTalentPage from './BasicTalentPage';
import { Gen, GenStrict } from '../types';
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

const info: GenStrict<Talent, [string, string]> = {
	"soctalent": [ "Social Talents", "ability/social_talents" ],
	"vigtalent": [ "Vigilante Talents", "ability/vigilante_talents" ],
	"invtalent": [ "Investigator Talents", "ability/investigator_talents" ],
	"ninjatrick": [ "Ninja Tricks", "ability/ninja_tricks" ],
	"kipower": [ "Ki Powers", "ability/ki_powers" ],
	"stylestrike": [ "Style Strikes", "ability/style_strikes" ],
};
const things: Gen<Talent, string> = {};
const addendaObj: GenStrict<string, string> = {
	studiedstrike: "This type of talent adds effects to an investigator's studied combat or studied strike, and has this limitation: Only one of these talents can be applied to an individual attack, but the decision can be made when the damage is dealt.",
	avenger: "This talent can only be taken by avenger vigilantes.",
	stalker: "This talent can only be taken by stalker vigilantes.",
	hiddenstrike: "This type of talent can only be taken by stalker vigilantes, and it has a limitation: only one talent of this type can be added to a given hidden strike, and only when that hidden strike is dealt against a foe that is unaware of the stalker vigilante's presence (or who considers him an ally), unless otherwise noted."
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
