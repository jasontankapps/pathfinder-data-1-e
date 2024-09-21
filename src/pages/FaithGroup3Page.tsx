import { getGuaranteedItem } from '../components/getItem';
import faiths from '../json/faiths3.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Faiths", "main/faiths"]];

type Data = typeof faiths;

interface FaithProps {
	id: string,
};

const FaithGroup3Page: React.FC<FaithProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), faiths);

	return <BasicPage pageId={"faith/" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default FaithGroup3Page;
