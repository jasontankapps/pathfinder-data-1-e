import { useParams } from 'react-router';
import getItem from '../components/getItem';
import masterpieces from '../json/class_ability_bardic_masterpieces.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Bard", "class/bard"],
	["Bardic Masterpieces", "ability/bardic_masterpieces"]
];

type Data = typeof masterpieces;

type Params = { id?: keyof Data };

const MasterpiecePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, masterpieces);

	return <BasicPage pageId={"masterpiece--" + id} title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;
};

export default MasterpiecePage;
