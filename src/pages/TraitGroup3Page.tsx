import { getGuaranteedItem } from '../components/getItem';
import traits from './subpages/__trait3';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Traits", "main/traits"]];

type Data = typeof traits;

interface TraitProps {
	id: string,
};

const TraitGroup3Page: React.FC<TraitProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), traits);

	return <BasicPage
		hasJL={hasJL}
		pageId={"trait--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={subhierarchy.length > 0 ? subhierarchy[subhierarchy.length - 1] : ["Traits", "main/traits"]}
	>{jsx}</BasicPage>
};

export default TraitGroup3Page;
