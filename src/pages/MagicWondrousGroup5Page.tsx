import { getGuaranteedItem } from '../components/getItem';
import magic_wondrous from '../json/magic_wondrous5.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Wondrous Items", "main/magic_wondrous"]];

type Data = typeof magic_wondrous;

interface MagicProps {
	id: string,
};

const FeatGroup5Page: React.FC<MagicProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), magic_wondrous);

	return <BasicPage pageId={"magic-wondrous/" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default FeatGroup5Page;
