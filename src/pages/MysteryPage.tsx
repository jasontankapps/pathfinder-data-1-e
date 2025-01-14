import { useParams } from 'wouter';
import getItem from '../components/getItem';
import mysteries from './subpages/__mystery';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Oracle", "class/oracle"],
	["Mysteries", "ability/mysteries"]
];

type Data = typeof mysteries;

type Params = { id?: keyof Data };

const MysteryPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, mysteries);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"/mystery/" + id}
		topLink={["Oracle Mysteries", "ability/mysteries"]}
	>{jsx}</BasicPage>;
};

export default MysteryPage;
