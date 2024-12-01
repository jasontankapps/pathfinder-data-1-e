import { useParams } from 'react-router';
import getItem from '../components/getItem';
import magic from './subpages/__magic-ring';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Magic Rings", "main/magic_rings"]];

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, magic);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"magic-ring--" + id}
		topLink={["Magic Rings", "main/magic_rings"]}
	>{jsx}</BasicPage>;
};

export default MagicPage;
