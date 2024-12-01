import getItem from '../components/getItem';
import prestige_classes from './subpages/__prestigeclass1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof prestige_classes;

interface ClassProps {
	id: string,
};

const PrestigeClassGroup1Page: React.FC<ClassProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getItem((id as keyof Data), prestige_classes);

	const pageId = "prestigeclass--" + id;

	return (
		<BasicPage
			pageId={pageId}
			title={title}
			hierarchy={[...hierarchy, ...subhierarchy]}
			sources={sources}
		>{jsx}</BasicPage>
	);
};

export default PrestigeClassGroup1Page;
