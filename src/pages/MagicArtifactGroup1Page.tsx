import magic_artifacts from './subpages/__magic-artifact1';
import MagicArtifactGroupBasic from './MagicArtifactGroupBasic';

const MagicArtifactGroup1Page: React.FC<{id: string}> = ({id}) =>
	<MagicArtifactGroupBasic id={id} info={magic_artifacts} possiblyUnknown={true} />;

export default MagicArtifactGroup1Page;
