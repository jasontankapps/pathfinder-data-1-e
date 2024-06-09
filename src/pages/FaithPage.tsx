import { useParams } from 'react-router';
import getItem from '../components/getItem';
import faiths from '../json/faiths.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Faiths", "faiths"]];

type Data = typeof faiths;

type Params = { id?: keyof Data };

const FaithPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>(id, faiths);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default FaithPage;
