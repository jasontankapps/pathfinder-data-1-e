import getItem from '../components/getItem';
import faiths from './subpages/__faith1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Faiths", "main/faiths"]];

type Data = typeof faiths;

interface FaithProps {
	id: string,
};

const FaithGroup1Page: React.FC<FaithProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), faiths);

	return <BasicPage
		pageId={"faith--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Faiths/Deities", "main/faiths"]}
	>{jsx}</BasicPage>;
};

export default FaithGroup1Page;
