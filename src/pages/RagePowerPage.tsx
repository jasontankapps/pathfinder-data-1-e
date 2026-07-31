import { ReactElement } from 'react';
import { useParams } from 'wouter';
import getItem from '../components/getItem';
import Link from '../components/Link';
import rage_powers from './subpages/_GEN_ragepower';
import BasicTalentPage from './BasicTalentPage';
import { GenStrict, Hierarchy } from '../types';
import './css/Page.css';

const tL: Hierarchy = ["Rage Powers", "ability/rage_powers"];

type Data = typeof rage_powers;

type Params = { id?: keyof Data };

const addendaObj: GenStrict<string, ReactElement> = {
	blood: <><strong className="hl">Blood rage powers</strong> grant powers in a theme. A barbarian cannot select from more than one group of blood rage powers."</>,
	totem: <><strong className="hl">Totem rage powers</strong> are only available to barbarians taking the <Link to="/arc-barbarian/Totem Warrior">Totem Warrior</Link> archetype. A barbarian cannot select from more than one group of totem rage powers; for example, a barbarian who selects a <em>beast</em> totem rage power cannot later choose to gain any of the <em>dragon</em> totem rage powers (any rage power with "dragon totem" in its title).</>
};
const empty = {};

const RagePowerPage: React.FC = () => {
	const { id } = useParams<Params>();

	const { hasJL, title, jsx, topLink, addenda, notBookmarkable } = getItem<Data>(id, rage_powers);

	return <BasicTalentPage
		hasJL={hasJL}
		id={id || "not_found"}
		title={title}
		prefix={"ragepower"}
		topLink={topLink || tL}
		topLinkInfo={empty}
		things={empty}
		notBookmarkable={notBookmarkable}
		addenda={addenda}
		addendaObj={addendaObj}
	>{jsx}</BasicTalentPage>;
};

export default RagePowerPage;
