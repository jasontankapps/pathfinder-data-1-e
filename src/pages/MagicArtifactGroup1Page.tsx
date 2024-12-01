import getItem from '../components/getItem';
import magic_artifacts from './subpages/__magic-artifact1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Artifacts", "main/magic_artifacts"]];

type Data = typeof magic_artifacts;

interface MagicProps {
	id: string,
};

const MagicWeaponGroup1Page: React.FC<MagicProps> = ({id}) => {

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), magic_artifacts);

	return <BasicPage
		pageId={"magic-artifact--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Artifacts", "main/magic_artifacts"]}
	>{jsx}</BasicPage>;
};

export default MagicWeaponGroup1Page;
