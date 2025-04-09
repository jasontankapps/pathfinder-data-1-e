import { useParams } from 'wouter';
import getItem from '../components/getItem';
import discovery from './subpages/__discovery';
import arcanediscovery from './subpages/__arcanediscovery';
import BasicPage from './BasicPage';
import './Page.css';

const allTalents = {
	...discovery,
	...arcanediscovery
};

type Data = typeof allTalents;

type Params = { id?: keyof Data };

const info: { [key: string]: [string, string] } = {
	"talent": [ "Rogue Talent", "ability/rogue_talents" ],
	"advancedtalent": [ "Advanced Rogue Talent", "ability/advanced_rogue_talents" ],
	"ninjatrick": [ "Ninja Tricks", "ability/ninja_tricks" ],
	"mastertrick": [ "Master Tricks", "ability/master_tricks" ],
	"trick": [ "Mesmerist Tricks", "ability/tricks" ],
	"masterfultrick": [ "Masterful Tricks", "ability/masterful_tricks" ],
	"slayertalent": [ "Slayer Talents", "ability/slayer_talents" ],
	"advancedslayertalent": [ "Advanced Slayer Talents", "ability/advanced_slayer_talents" ],
	"socialtalent": [ "Social Talents", "ability/social_talents" ],
	"vigilantetalent": [ "Vigilante Talents", "ability/vigilante_talents" ],
	"investigatortalent": [ "Investigator Talents", "ability/investigator_talents" ],
	"hex": [ "Witch Hexes", "ability/hexes" ],
	"majorhex": [ "Major Witch Hexes", "ability/major_hexes" ],
	"grandhex": [ "Grand Witch Hexes", "ability/grand_hexes" ],
	"shamanhex": [ "Shaman Hexes", "ability/shaman_hexes" ],
	"discovery": [ "Alchemist Discoveries", "ability/discoveries" ],
	"granddiscovery": [ "Alchemist Grand Discoveries", "ability/grand_discoveries" ],
	"arcanediscovery": [ "Arcane Discovery", "ability/arcane_discoveries" ]
};

const TalentPage: React.FC<{ prefix: keyof typeof info }> = ({prefix}) => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, allTalents);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={`/${prefix}/${id}`}
		topLink={info[prefix]}
	>{jsx}</BasicPage>;
};

export default TalentPage;
