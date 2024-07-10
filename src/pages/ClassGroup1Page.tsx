import getItem from '../components/getItem';
import classes from '../json/classes.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof classes;

const ClassGroup1Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources } = getItem<Data>((id as keyof Data), classes);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;

};

export default ClassGroup1Page;
