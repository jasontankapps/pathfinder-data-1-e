import { useParams } from 'react-router';
import getItem from '../components/getItem';
import monsters1 from '../json/monsters1.json';
import monsters2 from '../json/monsters2.json';
import monsters3 from '../json/monsters3.json';
import monsters4 from '../json/monsters4.json';
import monsters5 from '../json/monsters5.json';
import monsters_u from '../json/monsters_unique.json';
import monsters_m from '../json/mythic_monsters.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const monsters = {...monsters1, ...monsters2, ...monsters3, ...monsters4, ...monsters5, ...monsters_u, ...monsters_m};

const hierarchy: HierarchyArray = [["Monsters", "monsters"]];

type Data = typeof monsters;

type Params = { id?: keyof Data };

const MonsterPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, monsters);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default MonsterPage;
