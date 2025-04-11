import { ReactElement } from 'react';
import { useParams } from 'wouter';
import getItem from '../components/getItem';
import talent from './subpages/__talent';
import slayertalent from './subpages/__slayertalent';
import trick from './subpages/__trick';
import ninjatrick from './subpages/__ninjatrick';
import hex from './subpages/__hex';
import shamanhex from './subpages/__shamanhex';
import discovery from './subpages/__discovery';
import arcanediscovery from './subpages/__arcanediscovery';
import BasicPage from './BasicPage';
import './Page.css';

const allTalents = {
	talent,
	slayertalent,
	trick,
	ninjatrick,
	hex,
	shamanhex,
	discovery,
	arcanediscovery
};

type Talent = keyof typeof allTalents;

const info: { [key in Talent]: [string, string] } = {
	"talent": [ "Rogue Talent", "ability/rogue_talents" ],
	"slayertalent": [ "Slayer Talents", "ability/slayer_talents" ],
//	"socialtalent": [ "Social Talents", "ability/social_talents" ],
//	"vigilantetalent": [ "Vigilante Talents", "ability/vigilante_talents" ],
//	"investigatortalent": [ "Investigator Talents", "ability/investigator_talents" ],
	"ninjatrick": [ "Ninja Tricks", "ability/ninja_tricks" ],
	"trick": [ "Mesmerist Tricks", "ability/tricks" ],
//	"stare": [ "Mesmerist Stares", "ability/stares" ],
	"hex": [ "Witch Hexes", "ability/hexes" ],
	"shamanhex": [ "Shaman Hexes", "ability/shaman_hexes" ],
	"discovery": [ "Alchemist Discoveries", "ability/discoveries" ],
	"arcanediscovery": [ "Arcane Discovery", "ability/arcane_discoveries" ],
//	"phrenicamp": [ "Phrenic Amplifications", "ability/phrenic_amplifications" ],
};

const addendaObj: { [key: string]: string } = {
	sneakattack: "This type of talent adds effects to a rogue's sneak attack, and has this limitation: Only one of these talents can be applied to an individual attack and the decision must be made before the attack roll is made."
};

const getAddenda = (input: string[], jsx: ReactElement, id: string) => {
	const found: ReactElement[] = [];
	input.forEach(bit => {
		if(addendaObj[bit]) {
			found.push(<aside key={`${id}-addenda:${bit}`}><p>{addendaObj[bit]}</p></aside>);
		}
	});
	if(found.length > 1) {
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
