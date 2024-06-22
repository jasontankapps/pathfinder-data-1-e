import { useParams } from 'react-router';
import getItem from '../components/getItem';
import inquisitions from '../json/class_ability_inquisitions.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "classes"],
	["Inquisitor", "class/inquisitor"],
	["Inquisitions", "ability/inquisitions"]
];

type Data = typeof inquisitions;

type Params = { id?: keyof Data };

const InquisitionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, inquisitions);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default InquisitionPage;
