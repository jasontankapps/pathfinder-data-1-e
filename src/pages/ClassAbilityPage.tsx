import { useParams } from 'react-router';
import getItem from '../components/getItem';
import classAbilities from '../json/class_abilities.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Classes", "classes"]];

type Data = typeof classAbilities;

type Params = { id?: keyof Data };

const FaithPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>(id, classAbilities);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default FaithPage;
