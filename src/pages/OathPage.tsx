import { useParams } from 'react-router';
import getItem from '../components/getItem';
import oaths from '../json/class_ability_oaths.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Paladin", "class/paladin"],
	["Paladin Oaths", "ability/oaths"]
];

type Data = typeof oaths;

type Params = { id?: keyof Data };

const OathPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, oaths);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"oath/" + id}
	/>;
};

export default OathPage;
