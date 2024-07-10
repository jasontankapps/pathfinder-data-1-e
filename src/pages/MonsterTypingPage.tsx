import { useParams } from 'react-router';
import getItem from '../components/getItem';
import monster_types from '../json/monster_types.json';
import monster_subtypes from '../json/monster_subtypes.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["All Rules", "main/rules"],
	["Gamemastering", "rule/gamemastering"],
	["Universal Monster Rules", "rule/umr"]
];

const typings = {...monster_types, ...monster_subtypes};

type Data = typeof typings;

type Params = { id?: keyof Data };

const BlessingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, typings);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;
};

export default BlessingPage;
