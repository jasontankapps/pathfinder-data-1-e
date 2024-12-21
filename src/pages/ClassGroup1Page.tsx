import getItem from '../components/getItem';
import classes from './subpages/__class1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof classes;

interface ClassProps {
	id: string,
};

const ClassGroup1Page: React.FC<ClassProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, classes);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"class--" + id}
	>{jsx}</BasicPage>;

};

export default ClassGroup1Page;
