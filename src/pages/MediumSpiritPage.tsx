import { useParams } from 'react-router';
import getItem from '../components/getItem';
import base_spirits from '../json/class_ability_spirits.json';
import legendary_spirits from '../json/class_ability_legendary_spirits.json';
import outsider_spirits from '../json/class_ability_outsider_spirits.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy1: HierarchyArray = [
	["Classes", "classes"],
	["Medium", "class/medium"],
	["Spirits", "ability/spirits"]
];

const hierarchy2: HierarchyArray = [
	["Classes", "classes"],
	["Medium", "class/medium"],
	["Outer Channeler", "class/archetype/outer_channeler"]
];

const spirits = {...base_spirits, ...legendary_spirits, ...outsider_spirits};

type Data = typeof base_spirits;

type Params = { id?: keyof Data };

const BlessingPage: React.FC<{type?: "outsider"}> = ({ type }) => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, spirits);

	const hierarchy = type ? hierarchy2 : hierarchy1;

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default BlessingPage;
