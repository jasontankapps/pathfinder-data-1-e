import { useParams } from 'react-router';
import getItem from '../components/getItem';
import schools from '../json/class_ability_arcane_schools.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "main/classes"],
	["Wizard", "class/wizard"],
	["Arcane Schools", "ability/arcane_schools"]
];

type Data = typeof schools;

type Params = { id?: keyof Data };

const SchoolPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, schools);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default SchoolPage;
