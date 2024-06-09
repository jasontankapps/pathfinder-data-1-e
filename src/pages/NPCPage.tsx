import { useParams } from 'react-router';
import getItem from '../components/getItem';
import npcs from '../json/npcs.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Monsters", "monsters"], ["All NPCs", "npcs"]];

type Data = typeof npcs;

type Params = { id?: keyof Data };

const NPCPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, npcs);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default NPCPage;
