import { getGuaranteedItem } from '../components/getItem';
import faiths from '../json/faiths2.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Faiths", "main/faiths"]];

type Data = typeof faiths;

const FaithGroup2Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), faiths);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default FaithGroup2Page;
