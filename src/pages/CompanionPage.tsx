import { useParams } from 'react-router';
import getItem from '../components/getItem';
import companions from '../json/class_ability_druid_companions.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "main/classes"],
	["Druid", "class/druid"],
	["Animal Companions", "ability/druid_companions"]
];

type Data = typeof companions;

type Params = { id?: keyof Data };

const CompanionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, companions);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default CompanionPage;
