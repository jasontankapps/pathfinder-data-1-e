import { useParams } from 'react-router';
import getItem from '../components/getItem';
import abilities from '../json/class_abilities.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Classes", "classes"]];

type Data = typeof abilities;

type Params = { id?: keyof Data };

const ArchetypeGroup1Page: React.FC<{id: string}> = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>(id, abilities);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default ArchetypeGroup1Page;
