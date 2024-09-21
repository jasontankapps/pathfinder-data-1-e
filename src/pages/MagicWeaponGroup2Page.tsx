import { getGuaranteedItem } from '../components/getItem';
import magic_weapons from '../json/magic_weapon2.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Magic Weapons", "main/magic_weapons"]];

type Data = typeof magic_weapons;

interface MagicProps {
	id: string,
};

const MagicWeaponGroup2Page: React.FC<MagicProps> = ({id}) => {

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), magic_weapons);

	return <BasicPage pageId={"magic-weapon/" + id} title={title} markdown={markdown} tables={tables} hierarchy={[...hierarchy, ...subhierarchy]} sources={sources} />;
};

export default MagicWeaponGroup2Page;
