import getItem from '../components/getItem';
import magic_artifacts from '../json/magic_artifact.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Artifacts", "main/magic_artifacts"]];

type Data = typeof magic_artifacts;

const MagicWeaponGroup1Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), magic_artifacts);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default MagicWeaponGroup1Page;
