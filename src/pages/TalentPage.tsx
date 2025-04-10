import { useParams } from 'wouter';
import getItem from '../components/getItem';
import trick from './subpages/__trick';
import ninjatrick from './subpages/__ninjatrick';
import hex from './subpages/__hex';
import shamanhex from './subpages/__shamanhex';
import discovery from './subpages/__discovery';
import arcanediscovery from './subpages/__arcanediscovery';
import BasicPage from './BasicPage';
import './Page.css';

const allTalents = {
	trick,
	ninjatrick,
	hex,
	shamanhex,
	discovery,
	arcanediscovery
};

type Talent = keyof typeof allTalents;

const info: { [key in Talent]: [string, string] } = {
//	"talent": [ "Rogue Talent", "ability/rogue_talents" ],
//	"advancedtalent": [ "Advanced Rogue Talent", "ability/advanced_rogue_talents" ],
	"ninjatrick": [ "Ninja Tricks", "ability/ninja_tricks" ],
//	"mastertrick": [ "Master Tricks", "ability/master_tricks" ],
	"trick": [ "Mesmerist Tricks", "ability/tricks" ],
//	"slayertalent": [ "Slayer Talents", "ability/slayer_talents" ],
//	"advancedslayertalent": [ "Advanced Slayer Talents", "ability/advanced_slayer_talents" ],
//	"socialtalent": [ "Social Talents", "ability/social_talents" ],
//	"vigilantetalent": [ "Vigilante Talents", "ability/vigilante_talents" ],
//	"investigatortalent": [ "Investigator Talents", "ability/investigator_talents" ],
	"hex": [ "Witch Hexes", "ability/hexes" ],
	"shamanhex": [ "Shaman Hexes", "ability/shaman_hexes" ],
	"discovery": [ "Alchemist Discoveries", "ability/discoveries" ],
	"arcanediscovery": [ "Arcane Discovery", "ability/arcane_discoveries" ],
//	"phrenicamp": [ "Phrenic Amplifications", "ability/phrenic_amplifications" ],
};

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const data = allTalents[prefix];

	type Data = typeof data;
	type Params = { id?: keyof Data };

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, topLink } = getItem<Data>(id, data);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={`/${prefix}/${id}`}
		topLink={topLink || info[prefix]}
	>{jsx}</BasicPage>;
};

export default TalentPage;
