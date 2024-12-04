import { getGuaranteedItem } from '../components/getItem';
import prestige_classes from './subpages/__prestigeclass4';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof prestige_classes;

interface ClassProps {
	id: string,
};

const PrestigeClassGroup4Page: React.FC<ClassProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), prestige_classes);

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

export default PrestigeClassGroup4Page;
