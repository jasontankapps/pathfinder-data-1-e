import { useParams } from 'react-router';
import getItem from '../components/getItem';
import haunts from '../json/haunts.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Gamemastering", "rule/gamemastering"],
	["Gamemastery Guide", "rule/gamemastery_guide"],
	["Advanced Topics", "rule/advanced_topics"],
	["Haunts (Rules)", "rule/haunts"],
	["Haunts", "main/haunts"]
];

type Data = typeof haunts;

type Params = { id?: keyof Data };

const HauntPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, haunts);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"haunt--" + id}
	/>;
};

export default HauntPage;
