import { useParams } from 'react-router';
import getItem from '../components/getItem';
import psychic_implements from '../json/class_ability_implements.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "main/classes"],
	["Occultist", "class/occultist"],
	["Implements", "ability/implements"]
];

type Data = typeof psychic_implements;

type Params = { id?: keyof Data };

const ImplementPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, psychic_implements);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default ImplementPage;
