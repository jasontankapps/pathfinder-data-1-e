import { useParams } from 'react-router';
import getItem from '../components/getItem';
import magic from '../json/magic_ioun_stones.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Magic Items", "magic"],
	["Wondrous Items", "magic_wondrous"],
	["Ioun Stone", "magic/wondrous/ioun_stone"]
];

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>(id, magic);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default MagicPage;
