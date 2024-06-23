import { useParams } from 'react-router';
import getItem from '../components/getItem';
import disciplines from '../json/class_ability_disciplines.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "classes"],
	["Psychic", "class/psychic"],
	["Disciplines", "ability/disciplines"]
];

type Data = typeof disciplines;

type Params = { id?: keyof Data };

const DiscliplinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, disciplines);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default DiscliplinePage;
