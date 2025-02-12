import { getGuaranteedItem } from '../components/getItem';
import enhancements from './subpages/__magic-enhancement2';
import { Hierarchy } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof enhancements;

interface MagicEnhancementProps {
	id: string,
};

const topLink: Hierarchy = ["Magical Enhancements", "main/magic_enhancements"];

const MagicEnhancementGroup2Page: React.FC<MagicEnhancementProps> = ({id}) => {

	const { hasJL, title, jsx, sources } = getGuaranteedItem<Data>((id as keyof Data), enhancements);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/magic-enhancement/" + id}
		title={title}
		sources={sources}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default MagicEnhancementGroup2Page;
