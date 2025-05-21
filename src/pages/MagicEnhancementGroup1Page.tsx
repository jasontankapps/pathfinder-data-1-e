import getItem from '../components/getItem';
import enhancements from './subpages/__magic-enh1';
import { Hierarchy } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof enhancements;

interface MagicEnhancementProps {
	id: string,
};

const topLink: Hierarchy = ["Magical Enhancements", "main/magic_enhancements"];

const MagicEnhancementGroup1Page: React.FC<MagicEnhancementProps> = ({id}) => {

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>((id as keyof Data), enhancements);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/magic-enh/" + id}
		title={title}
		sources={sources}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MagicEnhancementGroup1Page;
