import { getGuaranteedItem } from '../components/getItem';
import classes from '../json/classes4.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Classes", "classes"]];

type Data = typeof classes;

const ClassGroup4Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources } = getGuaranteedItem<Data>((id as keyof Data), classes);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default ClassGroup4Page;
