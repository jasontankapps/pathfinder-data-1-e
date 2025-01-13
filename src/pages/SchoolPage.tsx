import { useParams } from 'wouter';
import getItem from '../components/getItem';
import schools from './subpages/__arcaneschool';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Wizard", "class/wizard"],
	["Arcane Schools", "ability/arcane_schools"]
];

type Data = typeof schools;

type Params = { id?: keyof Data };

const SchoolPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, schools);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"school--" + id}
		topLink={["Arcane Schools", "ability/arcane_schools"]}
	>{jsx}</BasicPage>;
};

export default SchoolPage;
