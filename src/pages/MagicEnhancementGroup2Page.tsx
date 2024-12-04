import { getGuaranteedItem } from '../components/getItem';
import enhancements from './subpages/__magic-enhancement2';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Magical Enhancements", "main/magic_enhancements"]];

type Data = typeof enhancements;

interface MagicEnhancementProps {
	id: string,
};

const MagicEnhancementGroup2Page: React.FC<MagicEnhancementProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), enhancements);

	return <BasicPage
		pageId={"magic-enhancement--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Magical Enhancements", "main/magic_enhancements"]}
	>{jsx}</BasicPage>;
};

export default MagicEnhancementGroup2Page;
