import { getGuaranteedItem } from '../components/getItem';
import abilities from '../json/class_abilities3.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof abilities;

interface AbilityProps {
	id: string,
};

const ClassAbilityGroup3Page: React.FC<AbilityProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), abilities);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"class-ability--" + id}
	/>;
};

export default ClassAbilityGroup3Page;
