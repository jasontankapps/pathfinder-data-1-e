import { getGuaranteedItem } from '../components/getItem';
import spells from './subpages/__spell10';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Spells", "main/spells"]];

type Data = typeof spells;

interface SpellProps {
	id: string,
};

const SpellGroup10Page: React.FC<SpellProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), spells);

	return <BasicPage
		hasJL={hasJL}
		pageId={"spell--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
	>{jsx}</BasicPage>;
};

export default SpellGroup10Page;
