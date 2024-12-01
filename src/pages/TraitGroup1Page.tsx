import getItem from '../components/getItem';
import traits from './subpages/__trait1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Traits", "main/traits"]];

type Data = typeof traits;

interface TraitProps {
	id: string,
};

const TraitGroup1Page: React.FC<TraitProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), traits);

	return <BasicPage
		pageId={"trait--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Traits", "main/traits"]}
	>{jsx}</BasicPage>
};

export default TraitGroup1Page;
