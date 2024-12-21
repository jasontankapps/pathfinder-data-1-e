import getItem from '../components/getItem';
import feats from './subpages/__feat1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Feats", "main/feats"]];

type Data = typeof feats;

interface FeatProps {
	id: string,
};

const FeatGroup1Page: React.FC<FeatProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), feats);

	return <BasicPage
		hasJL={hasJL}
		pageId={"feat--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
	>{jsx}</BasicPage>;
};

export default FeatGroup1Page;
