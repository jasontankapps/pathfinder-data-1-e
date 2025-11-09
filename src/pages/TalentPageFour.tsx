import { useParams } from 'wouter';
import getItem from '../components/getItem';
import trick from './subpages/__trick';
import stare from './subpages/__stare';
import discovery from './subpages/__discovery';
import arcanedisc from './subpages/__arcanedisc';
import mercy from './subpages/__mercy';
import performance from './subpages/__performance';
import BasicTalentPage from './BasicTalentPage';
import { Gen, GenStrict } from '../types';
import './Page.css';

const allTalents = {
	trick,
	stare,
	discovery,
	arcanedisc,
	mercy,
	performance
};

type Talent = keyof typeof allTalents;

const info: GenStrict<Talent, [string, string]> = {
	"trick": [ "Mesmerist Tricks", "ability/tricks" ],
	"stare": [ "Mesmerist Stares", "ability/stares" ],
	"discovery": [ "Alchemist Discoveries", "ability/discoveries" ],
	"arcanedisc": [ "Arcane Discoveries", "ability/arcane_discoveries" ],
	"mercy": [ "Paladin Mercies", "ability/mercies" ],
	"performance": [ "Bardic Performances", "ability/bardic_performances" ]
};
const things: Gen<Talent, string> = {
	arcanedisc: "arcane discovery"
};
const addendaObj: GenStrict<string, string> = {
	primarybomb: "This discovery modifies an alchemist's bomb, and has this limitation: These discoveries do not stack - only one such discovery can be applied to an individual bomb.",
	devilbane: "Devilbane gazes tend to be more limited in their scope than standard bold stare improvements, but cut to the core of an outsider's being. When a devilbane gaze is used against a creature with the outsider type, double the hypnotic stare penalty applied by the devilbane gaze improvement (but not the Will save penalty the original hypnotic stare imposes). Despite their moniker, devilbane gazes affect all outsiders equally well."
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
