import { useParams } from 'wouter';
import getItem from '../components/getItem';
import magic from './subpages/__magic-ioun';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Magic Items", "main/magic"],
	["Wondrous Items", "main/magic_wondrous"],
	["Ioun Stone", "magic-wondrous/ioun_stone"]
];

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, magic);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"magic-ioun--" + id}
		topLink={["Ioun Stone", "magic-wondrous/ioun_stone"]}
	>{jsx}</BasicPage>;
};

export default MagicPage;
