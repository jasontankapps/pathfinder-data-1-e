import { getGuaranteedItem } from '../components/getItem';
import families from './subpages/__family2';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof families;

interface MonsterFamilyProps {
	id: string,
};

const MonsterFamilyGroup2Page: React.FC<MonsterFamilyProps> = ({id}) => {

	const { hasJL, title, jsx, notBookmarkable } = getGuaranteedItem<Data>((id as keyof Data), families);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/family/" + id}
		title={title}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MonsterFamilyGroup2Page;
