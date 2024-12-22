import { getGuaranteedItem } from '../components/getItem';
import faiths from './subpages/__faith5';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Faiths", "main/faiths"]];

type Data = typeof faiths;

interface FaithProps {
	id: string,
};

const FaithGroup5Page: React.FC<FaithProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), faiths);

	return <BasicPage
		hasJL={hasJL}
		pageId={"faith--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Faiths/Deities", "main/faiths"]}
	>{jsx}</BasicPage>;
};

export default FaithGroup5Page;