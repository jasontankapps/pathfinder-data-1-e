import getItem from '../components/getItem';
import monsters from './subpages/__monster1';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Monsters", "main/monsters"]];

type Data = typeof monsters;

interface MonsterProps {
	id: string,
};

const MonsterGroup01Page: React.FC<MonsterProps> = ({id}) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>((id as keyof Data), monsters);

	return <BasicPage
		hasJL={hasJL}
		pageId={"monster--" + id}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
	>{jsx}</BasicPage>;
};

export default MonsterGroup01Page;
