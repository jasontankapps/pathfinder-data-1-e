import { useParams } from 'react-router';
import getItem from '../components/getItem';
import races from '../json/races.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Races", "races"]];

type Data = typeof races;

type Params = { id?: keyof Data };

const RacePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, races);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default RacePage;
