import { useParams } from 'react-router';
import { useRouteMatch } from "react-router-dom";
import getItem from '../components/getItem';
import base_spirits from '../json/class_ability_spirits.json';
import legendary_spirits from '../json/class_ability_legendary_spirits.json';
import outsider_spirits from '../json/class_ability_outsider_spirits.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy1: HierarchyArray = [
	["Classes", "main/classes"],
	["Medium", "class/medium"],
	["Spirits", "ability/spirits"]
];

const hierarchy2: HierarchyArray = [
	["Classes", "main/classes"],
	["Medium", "class/medium"],
	["Outer Channeler", "archetype-medium/outer_channeler"]
];

const spirits = {...base_spirits, ...legendary_spirits, ...outsider_spirits};

type Data = typeof base_spirits;

type Params = { id?: keyof Data };

const MediumSpiritPage: React.FC = () => {
	const { path } = useRouteMatch();
	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, spirits);

	const m = path.match(/outsiderspirit/);
	const hierarchy = m ? hierarchy2 : hierarchy1;

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;
};

export default MediumSpiritPage;
