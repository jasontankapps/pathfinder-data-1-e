import { useParams } from 'react-router';
import getItem from '../components/getItem';
import corruptions from '../json/corruptions.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Gamemastering", "rule/gamemastering"],
	["Horror Rules", "rule/horror_rules"],
	["Corruption (Rules)", "rule/corruption"]
];

type Data = typeof corruptions;

type Params = { id?: keyof Data };

const BlessingPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, corruptions);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default BlessingPage;
