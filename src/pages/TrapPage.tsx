import { useParams } from 'react-router';
import getItem from '../components/getItem';
import traps from '../json/traps.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["All Rules", "main/rules"],
	["Environment", "rule/environment"],
	["Traps (Rules)", "rule/traps"],
	["Sample Traps", "rule/sample_traps"]
];

type Data = typeof traps;

type Params = { id?: keyof Data };

const TrapPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, traps);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"trap--" + id}
	/>;
};

export default TrapPage;
