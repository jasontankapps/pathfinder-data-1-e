import getItem from '../components/getItem';
import feats from '../json/feats.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Feats", "main/feats"]];

type Data = typeof feats;

interface FeatProps {
	id: string,
};

const FeatGroup1Page: React.FC<FeatProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), feats);

	return <BasicPage pageId={"feat/" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default FeatGroup1Page;
