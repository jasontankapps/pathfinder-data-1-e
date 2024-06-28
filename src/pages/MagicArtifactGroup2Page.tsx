import { getGuaranteedItem } from '../components/getItem';
import magic_artifacts from '../json/magic_artifact2.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Magic Items", "magic"], ["Artifacts", "magic_artifacts"]];

type Data = typeof magic_artifacts;

const MagicWeaponGroup2Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), magic_artifacts);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default MagicWeaponGroup2Page;
