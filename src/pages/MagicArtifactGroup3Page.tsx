import magic_artifacts from './subpages/__magic-artifact3';
import MagicArtifactGroupBasic from './MagicArtifactGroupBasic';

const MagicArtifactGroup3Page: React.FC<{id: string}> = ({id}) =>
	<MagicArtifactGroupBasic id={id} info={magic_artifacts} />;

export default MagicArtifactGroup3Page;
