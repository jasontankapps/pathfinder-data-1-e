import { GroupProps, BasicGroupPage } from './BasicGroupPage';
import { Hierarchy } from '../types';

const topLink: Hierarchy = ["Artifacts", "main/magic_artifacts"];

const MagicArtifactGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} prefix="magic-artifact" topLink={topLink} />;

export default MagicArtifactGroupBasic;
