import { getGuaranteedItem } from '../components/getItem';
import classes from './subpages/__class4';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof classes;

interface ClassProps {
	id: string,
};

const ClassGroup4Page: React.FC<ClassProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>(id as keyof Data, classes);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"class--" + id}
	>{jsx}</BasicPage>;

};

export default ClassGroup4Page;
