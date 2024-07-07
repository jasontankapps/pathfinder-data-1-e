import { useParams } from 'react-router';
import getItem from '../components/getItem';
import mysteries from '../json/class_ability_mysteries.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "main/classes"],
	["Oracle", "class/oracle"],
	["Mysteries", "ability/mysteries"]
];

type Data = typeof mysteries;

type Params = { id?: keyof Data };

const MysteryPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, mysteries);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default MysteryPage;
