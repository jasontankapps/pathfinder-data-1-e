import getItem from '../components/getItem';
import domains from './subpages/__domain1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Cleric", "class/cleric"],
	["Domains", "ability/domains"]
];

type Data = typeof domains;

interface DomainProps {
	id: string,
};

const DomainGroup1Page: React.FC<DomainProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), domains);

	return <BasicPage
		pageId={"domain--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Domains", "ability/domains"]}
	>{jsx}</BasicPage>;
};

export default DomainGroup1Page;
