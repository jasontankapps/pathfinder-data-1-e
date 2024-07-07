import { useParams } from 'react-router';
import getItem from '../components/getItem';
import bloodlines from '../json/class_ability_bloodrager_bloodlines.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "main/classes"],
	["Bloodrager", "class/bloodrager"],
	["Bloodrager Bloodlines", "ability/bloodrager_bloodlines"]
];

type Data = typeof bloodlines;

type Params = { id?: keyof Data };

const BloodragerBloodlinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, bloodlines);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default BloodragerBloodlinePage;
