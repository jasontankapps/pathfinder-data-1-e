import getItem from '../components/getItem';
import magic_wondrous from '../json/magic_wondrous.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Magic Items", "magic"], ["Wondrous Items", "magic_wondrous"]];

type Data = typeof magic_wondrous;

const FeatGroup1Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), magic_wondrous);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default FeatGroup1Page;
