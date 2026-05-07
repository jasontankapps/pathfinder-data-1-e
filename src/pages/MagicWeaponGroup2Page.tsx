import { getGuaranteedItem } from '../components/getItem';
import magic_weapons from './subpages/_GEN_magic-weapon2';
import { Hierarchy } from '../types';
import BasicPage from './BasicPage';
import './css/Page.css';

const topLink: Hierarchy = ["Magic Weapons", "main/magic_weapons"];

type Data = typeof magic_weapons;

interface MagicProps {
	id: string,
};

const MagicWeaponGroup2Page: React.FC<MagicProps> = ({id}) => {

	const { hasJL, title, jsx, notBookmarkable } = getGuaranteedItem<Data>((id as keyof Data), magic_weapons);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/magic-weapon/" + id}
		title={title}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MagicWeaponGroup2Page;
