import { useParams } from 'react-router';
import getItem from '../components/getItem';
import aspects from '../json/class_ability_aspects.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Shifter", "class/shifter"],
	["Aspects", "ability/aspects"]
];

type Data = typeof aspects;

type Params = { id?: keyof Data };

const BlessingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, aspects);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;
};

export default BlessingPage;
