import getItem from '../components/getItem';
import families from './subpages/_GEN_family1';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof families;

interface MonsterFamilyProps {
	id: string,
};

const MonsterFamilyGroup1Page: React.FC<MonsterFamilyProps> = ({id}) => {

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>((id as keyof Data), families);

	return <BasicPage
		hasJL={hasJL}
		pageId={"/family/" + id}
		title={title}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MonsterFamilyGroup1Page;
