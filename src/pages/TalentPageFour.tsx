import { ReactElement } from 'react';
import { useParams } from 'wouter';
import getItem from '../components/getItem';

import trick from './subpages/__trick';
import stare from './subpages/__stare';

import discovery from './subpages/__discovery';
import arcanediscovery from './subpages/__arcanediscovery';

import BasicPage from './BasicPage';
import './Page.css';

const allTalents = {
	trick,
	stare,
	discovery,
	arcanediscovery
};

type Talent = keyof typeof allTalents;

const info: { [key in Talent]: [string, string] } = {
	"trick": [ "Mesmerist Tricks", "ability/tricks" ],
	"stare": [ "Mesmerist Stares", "ability/stares" ],
	"discovery": [ "Alchemist Discoveries", "ability/discoveries" ],
	"arcanediscovery": [ "Arcane Discovery", "ability/arcane_discoveries" ]
};

const addendaObj: { [key: string]: string } = {
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
