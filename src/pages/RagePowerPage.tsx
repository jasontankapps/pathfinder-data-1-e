import { useParams } from 'react-router';
import { useRouteMatch } from "react-router-dom";
import getItem from '../components/getItem';
import powers from '../json/class_ability_rage_powers.json';
import stances from '../json/class_ability_stance_rage_powers.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy1: HierarchyArray = [
	["Classes", "main/classes"],
	["Barbarian", "class/barbarian"],
	["Rage Powers", "ability/rage_powers"]
];

const hierarchy2: HierarchyArray = [
	["Classes", "main/classes"],
	["Unchained Barbarian", "class/unchained_barbarian"],
	["Stance Rage Powers", "ability/stance_rage_powers"]
];

const rage_powers = {...powers, ...stances};

type Data = typeof rage_powers;

type Params = { id?: keyof Data };

const RagePowerPage: React.FC = () => {
	const { path } = useRouteMatch();
	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, rage_powers);

	const m = path.match(/outsiderspirit/);
	const hierarchy = m ? hierarchy2 : hierarchy1;

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"ragepower--" + id}
	/>;
};

export default RagePowerPage;
