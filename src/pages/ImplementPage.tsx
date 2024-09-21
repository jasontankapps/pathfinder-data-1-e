import { useParams } from 'react-router';
import getItem from '../components/getItem';
import psychic_implements from '../json/class_ability_implements.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Occultist", "class/occultist"],
	["Implements", "ability/implements"]
];

type Data = typeof psychic_implements;

type Params = { id?: keyof Data };

const ImplementPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, psychic_implements);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"implement/" + id}
	/>;
};

export default ImplementPage;
