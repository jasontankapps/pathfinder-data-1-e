import { ReactElement } from 'react';
import { useParams } from 'wouter';
import getItem from '../components/getItem';
import hex from './subpages/__hex';
import patron from './subpages/__patron';
import shamanhex from './subpages/__shamanhex';
import evolution from './subpages/__evolution';
import unchevolution from './subpages/__unchevolution';
import eidolon from './subpages/__eidolon';
import BasicPage from './BasicPage';
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

const info: { [key in Talent]: [string, string] } = {
	"hex": [ "Witch Hexes", "ability/hexes" ],
	"shamanhex": [ "Shaman Hexes", "ability/shaman_hexes" ],
	"evolution": [ "Eidolon Evolutions", "ability/evolutions" ],
	"unchevolution": [ "Unchained Eidolon Evolutions", "ability/unchained_evolutions" ],
	"eidolon": [ "Unchained Eidolon Subtypes", "ability/unchained_eidolon_subtypes" ],
	"patron": [ "Witch Patrons", "ability/patrons" ]
};

const addendaObj: { [key: string]: string } = {
	"1pt": "This is a 1-point evolution.",
	"2pts": "This is a 2-point evolution.",
	"3pts": "This is a 3-point evolution.",
	"4pts": "This is a 4-point evolution.",
	uniquepatron: "This is a unique patron that modifies aspects of a base patron."
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
