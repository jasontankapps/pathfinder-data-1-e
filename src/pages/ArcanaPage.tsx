import { useParams } from 'react-router';
import getItem from '../components/getItem';
import arcana from '../json/class_ability_magus_arcana.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "classes"],
	["Magus", "class/magus"],
	["Magus Arcana", "ability/magus_arcana"]
];

type Data = typeof arcana;

type Params = { id?: keyof Data };

const ArcanaPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, arcana);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default ArcanaPage;
