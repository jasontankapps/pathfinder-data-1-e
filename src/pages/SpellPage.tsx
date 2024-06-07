import { useParams } from 'react-router';
import getItem from '../components/getItem';
import spells1 from '../json/spells.json';
import spells2 from '../json/spells2.json';
import spells3 from '../json/spells3.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Spells", "spells"]];

const spells = {...spells1, ...spells2, ...spells3};

type Data = typeof spells;

type Params = { id?: keyof Data };

const SpellPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, spells);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default SpellPage;
