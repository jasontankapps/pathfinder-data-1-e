import { ReactElement } from 'react';
import { useParams } from 'wouter';
import getItem from '../components/getItem';
import investigatortalent from './subpages/__investigatortalent';
import socialtalent from './subpages/__socialtalent';
import vigilantetalent from './subpages/__vigilantetalent';
import ninjatrick from './subpages/__ninjatrick';
import kipower from './subpages/__kipower';
import stylestrike from './subpages/__stylestrike';
import BasicPage from './BasicPage';
import './Page.css';

const allTalents = {
	investigatortalent,
	socialtalent,
	vigilantetalent,
	ninjatrick,
	kipower,
	stylestrike
};

type Talent = keyof typeof allTalents;

const info: { [key in Talent]: [string, string] } = {
	"socialtalent": [ "Social Talents", "ability/social_talents" ],
	"vigilantetalent": [ "Vigilante Talents", "ability/vigilante_talents" ],
	"investigatortalent": [ "Investigator Talents", "ability/investigator_talents" ],
	"ninjatrick": [ "Ninja Tricks", "ability/ninja_tricks" ],
	"kipower": [ "Ki Powers", "ability/ki_powers" ],
	"stylestrike": [ "Style Strikes", "ability/style_strikes" ],
};

const addendaObj: { [key: string]: string } = {
	studiedstrike: "This type of talent adds effects to an investigator's studied combat or studied strike, and has this limitation: Only one of these talents can be applied to an individual attack, but the decision can be made when the damage is dealt.",
	avenger: "This talent can only be taken by avenger vigilantes.",
	stalker: "This talent can only be taken by stalker vigilantes.",
	hiddenstrike: "This type of talent can only be taken by stalker vigilantes, and it has a limitation: only one talent of this type can be added to a given hidden strike, and only when that hidden strike is dealt against a foe that is unaware of the stalker vigilante's presence (or who considers him an ally), unless otherwise noted."
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
