import { useParams } from 'react-router';
import getItem from '../components/getItem';
import traps from '../json/traps.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Environment", "rule/environment"],
	["Traps (Rules)", "rule/traps"],
	["Sample Traps", "rule/sample_traps"]
];

type Data = typeof traps;

type Params = { id?: keyof Data };

const TrapPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, traps);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default TrapPage;
