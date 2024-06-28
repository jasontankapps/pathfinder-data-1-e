import { getGuaranteedItem } from '../components/getItem';
import magic_weapons from '../json/magic_weapon2.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Magic Items", "magic"], ["Magic Weapons", "magic_weapons"]];

type Data = typeof magic_weapons;

const MagicWeaponGroup2Page: React.FC<{id: string}> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), magic_weapons);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default MagicWeaponGroup2Page;
