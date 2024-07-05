import getItem from '../components/getItem';
import classes from '../json/classes.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Classes", "classes"]];

type Data = typeof classes;

const ClassGroup1Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources } = getItem<Data>((id as keyof Data), classes);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;

};

export default ClassGroup1Page;
