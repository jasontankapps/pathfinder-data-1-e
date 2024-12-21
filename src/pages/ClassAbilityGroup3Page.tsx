import { getGuaranteedItem } from '../components/getItem';
import abilities from './subpages/__ability3';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof abilities;

interface AbilityProps {
	id: string,
};

const ClassAbilityGroup3Page: React.FC<AbilityProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>(id as keyof Data, abilities);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"class-ability--" + id}
		topLink={subhierarchy.length ? subhierarchy[subhierarchy.length - 1] : undefined}
	>{jsx}</BasicPage>;
};

export default ClassAbilityGroup3Page;
