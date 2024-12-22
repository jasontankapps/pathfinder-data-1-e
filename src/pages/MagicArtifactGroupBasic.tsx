import { HierarchyArray } from '../types';
import { GroupProps, BasicGroupPage } from './BasicGroupPage';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Artifacts", "main/magic_artifacts"]];
const topLink = hierarchy[2];

const MagicArtifactGroupBasic = (props: GroupProps) =>
	<BasicGroupPage {...props} hierarchy={hierarchy} prefix="magic-artifact" />;

export default MagicArtifactGroupBasic;
