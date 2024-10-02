import { useParams } from 'react-router';
import getItem from '../components/getItem';
import drugs from '../json/drugs.json';
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

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, drugs);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"drug--" + id}
	/>;
};

export default DrugPage;
