import getItem from '../components/getItem';
import abilities from '../json/class_abilities.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof abilities;

interface AbilityProps {
	id: string,
};

const ClassAbilityGroup1Page: React.FC<AbilityProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), abilities);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"class-ability/" + id}
	/>;
};

export default ClassAbilityGroup1Page;
