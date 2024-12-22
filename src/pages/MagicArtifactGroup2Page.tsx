import magic_artifacts from './subpages/__magic-artifact2';
import MagicArtifactGroupBasic from './MagicArtifactGroupBasic';

const MagicArtifactGroup2Page: React.FC<{id: string}> = ({id}) => <MagicArtifactGroupBasic id={id} info={magic_artifacts} />;

export default MagicArtifactGroup2Page;
