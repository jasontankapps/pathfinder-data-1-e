import { getGuaranteedItem } from '../components/getItem';
import magic_wondrous from '../json/magic_wondrous6.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Wondrous Items", "main/magic_wondrous"]];

type Data = typeof magic_wondrous;

const FeatGroup6Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), magic_wondrous);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default FeatGroup6Page;
