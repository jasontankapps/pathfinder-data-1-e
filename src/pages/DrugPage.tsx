import { useParams } from 'react-router';
import getItem from '../components/getItem';
import drugs from './subpages/__drug';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Gamemastering", "rule/gamemastering"],
	["Gamemastery Guide", "rule/gamemastery_guide"],
	["Advanced Topics", "rule/advanced_topics"],
	["Drugs and Addiction", "rule/drugs_and_addiction"],
	["Drugs", "main/drugs"]
];

type Data = typeof drugs;

type Params = { id?: keyof Data };

const DrugPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, drugs);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"drug--" + id}
		topLink={["Drugs", "main/drugs"]}
	>{jsx}</BasicPage>;
};

export default DrugPage;
