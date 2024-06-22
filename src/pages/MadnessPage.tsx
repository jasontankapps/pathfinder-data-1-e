import { useParams } from 'react-router';
import getItem from '../components/getItem';
import madnesses from '../json/madness.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Gamemastering", "rule/gamemastering"],
	["Horror Rules", "rule/horror_rules"],
	["Madness", "rule/madness"]
];

type Data = typeof madnesses;

type Params = { id?: keyof Data };

const MadnessPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, madnesses);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default MadnessPage;
