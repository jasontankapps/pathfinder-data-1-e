import { useParams } from 'react-router';
import getItem from '../components/getItem';
import powers from '../json/class_ability_rage_powers.json';
import stances from '../json/class_ability_stance_rage_powers.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy1: HierarchyArray = [
	["Classes", "classes"],
	["Barbarian", "class/barbarian"],
	["Rage Powers", "ability/rage_powers"]
];

const hierarchy2: HierarchyArray = [
	["Classes", "classes"],
	["Unchained Barbarian", "class/unchained_barbarian"],
	["Stance Rage Powers", "ability/stance_rage_powers"]
];

const rage_powers = {...powers, ...stances};

type Data = typeof rage_powers;

type Params = { id?: keyof Data };

const RagePowerPage: React.FC<{unchained?: boolean}> = ({unchained}) => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, rage_powers);

	const hierarchy = unchained ? hierarchy2 : hierarchy1;

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default RagePowerPage;
