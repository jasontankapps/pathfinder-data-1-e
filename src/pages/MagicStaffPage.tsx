import { useParams } from 'wouter';
import getItem from '../components/getItem';
import magic from './subpages/__magic-staff';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Magic Staves", "main/magic_staves"]];

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
		pageId={"/magic-staff/" + id}
		topLink={["Magic Staves", "main/magic_staves"]}
	>{jsx}</BasicPage>;
};

export default MagicPage;
