import getItem from '../components/getItem';
import magic_weapons from './subpages/__magic-weapon1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Magic Weapons", "main/magic_weapons"]];

type Data = typeof magic_weapons;

interface MagicProps {
	id: string,
};

const MagicWeaponGroup1Page: React.FC<MagicProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), magic_weapons);

	return <BasicPage
		hasJL={hasJL}
		pageId={"magic-weapon--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		topLink={["Magic Weapons", "main/magic_weapons"]}
	>{jsx}</BasicPage>;
};

export default MagicWeaponGroup1Page;
