import { useParams } from 'react-router';
import getItem from '../components/getItem';
import spells from '../json/spells.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Spells", "spells"]];

type Data = typeof spells;

type Params = { id?: keyof Data };

const SpellPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, spells);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default SpellPage;
