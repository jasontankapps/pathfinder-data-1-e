import { useParams } from 'react-router';
import getItem from '../components/getItem';
import traits from '../json/traits.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Traits", "traits"]];

type Data = typeof traits;

type Params = { id?: keyof Data };

const TraitPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>(id, traits);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default TraitPage;
