import { useParams } from 'react-router';
import getItem from '../components/getItem';
import blessings from '../json/class_ability_blessings.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Warpriest", "class/warpriest"],
	["Blessings", "ability/blessings"]
];

type Data = typeof blessings;

type Params = { id?: keyof Data };

const BlessingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, blessings);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"blessing/" + id}
	/>;
};

export default BlessingPage;
