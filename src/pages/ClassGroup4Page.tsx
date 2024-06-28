import { getGuaranteedItem } from '../components/getItem';
import classes from '../json/classes4.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Classes", "classes"]];

type Data = typeof classes;

interface Props {
	id: string
	subtopic?: "capstones" | "bonuses" | "archetypes"
}

const ClassGroup4Page: React.FC<Props> = ({id, subtopic}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), classes);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default ClassGroup4Page;
