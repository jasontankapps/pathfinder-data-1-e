import { useParams } from 'wouter';
import getItem from '../components/getItem';
import hex from './subpages/__hex';
import patron from './subpages/__patron';
import shamanhex from './subpages/__shamanhex';
import evolution from './subpages/__evolution';
import unchevolution from './subpages/__unchevolution';
import eidolon from './subpages/__eidolon';
import BasicTalentPage from './BasicTalentPage';
import { Gen, GenStrict } from '../types';
import './Page.css';

const allTalents = {
	hex,
	patron,
	shamanhex,
	evolution,
	unchevolution,
	eidolon
};

type Talent = keyof typeof allTalents;

const info: GenStrict<Talent, [string, string]> = {
	"hex": [ "Witch Hexes", "ability/hexes" ],
	"shamanhex": [ "Shaman Hexes", "ability/shaman_hexes" ],
	"evolution": [ "Eidolon Evolutions", "ability/evolutions" ],
	"unchevolution": [ "Unchained Eidolon Evolutions", "ability/unchained_evolutions" ],
	"eidolon": [ "Unchained Eidolon Subtypes", "ability/unchained_eidolon_subtypes" ],
	"patron": [ "Witch Patrons", "ability/patrons" ]
};
const things: Gen<Talent, string> = {};
const addendaObj: GenStrict<string, string> = {
	"1pt": "This is a 1-point evolution.",
	"2pts": "This is a 2-point evolution.",
	"3pts": "This is a 3-point evolution.",
	"4pts": "This is a 4-point evolution.",
	uniquepatron: "This is a unique patron that modifies aspects of a base patron."
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
