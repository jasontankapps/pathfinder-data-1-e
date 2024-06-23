import { useParams } from 'react-router';
import getItem from '../components/getItem';
import masterpieces from '../json/class_ability_bardic_masterpieces.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "classes"],
	["Bard", "class/bard"],
	["Bardic Masterpieces", "ability/bardic_masterpieces"]
];

type Data = typeof masterpieces;

type Params = { id?: keyof Data };

const MasterpiecePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, masterpieces);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default MasterpiecePage;
