import { useParams } from 'react-router';
import getItem from '../components/getItem';
import mysteries from '../json/class_ability_mysteries.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Oracle", "class/oracle"],
	["Mysteries", "ability/mysteries"]
];

type Data = typeof mysteries;

type Params = { id?: keyof Data };

const MysteryPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, mysteries);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"mystery--" + id}
	/>;
};

export default MysteryPage;
