import getItem from '../components/getItem';
import classes from '../json/classes.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof classes;

interface ClassProps {
	id: string,
};

const ClassGroup1Page: React.FC<ClassProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources } = getItem<Data>((id as keyof Data), classes);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"class-ability--" + id}
	/>;

};

export default ClassGroup1Page;
