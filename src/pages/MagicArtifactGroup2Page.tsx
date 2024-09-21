import { getGuaranteedItem } from '../components/getItem';
import magic_artifacts from '../json/magic_artifact2.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Artifacts", "main/magic_artifacts"]];

type Data = typeof magic_artifacts;

interface MagicProps {
	id: string,
};

const MagicWeaponGroup2Page: React.FC<MagicProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), magic_artifacts);

	return <BasicPage pageId={"magic-artifact/" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default MagicWeaponGroup2Page;
