import { getGuaranteedItem } from '../components/getItem';
import magic_artifacts from './subpages/__magic-artifact3';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Artifacts", "main/magic_artifacts"]];

type Data = typeof magic_artifacts;

interface MagicProps {
	id: string,
};

const MagicArtifactGroup3Page: React.FC<MagicProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), magic_artifacts);

	return <BasicPage
		hasJL={hasJL}
		pageId={"magic-artifact--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Artifacts", "main/magic_artifacts"]}
	>{jsx}</BasicPage>;
};

export default MagicArtifactGroup3Page;
