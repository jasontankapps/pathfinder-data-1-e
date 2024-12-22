import { getGuaranteedItem } from '../components/getItem';
import magic_wondrous from './subpages/__magic-wondrous9';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Wondrous Items", "main/magic_wondrous"]];

type Data = typeof magic_wondrous;

interface MagicProps {
	id: string,
};

const MagicWondrousGroup9Page: React.FC<MagicProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), magic_wondrous);

	return <BasicPage
		hasJL={hasJL}
		pageId={"magic-wondrous--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Wondrous Items", "main/magic_wondrous"]}
	>{jsx}</BasicPage>;
};

export default MagicWondrousGroup9Page;