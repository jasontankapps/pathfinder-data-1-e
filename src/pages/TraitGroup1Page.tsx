import getItem from '../components/getItem';
import traits from '../json/traits.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Traits", "main/traits"]];

type Data = typeof traits;

interface TraitProps {
	id: string,
};

const TraitGroup1Page: React.FC<TraitProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), traits);

	return <BasicPage pageId={"trait/" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default TraitGroup1Page;
