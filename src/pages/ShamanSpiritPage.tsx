import { useParams } from 'wouter';
import getItem from '../components/getItem';
import spirits from './subpages/__shamanspirit';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Shaman", "class/shaman"],
	["Shaman Spirits", "ability/shaman_spirits"]
];

type Data = typeof spirits;

type Params = { id?: keyof Data };

const ShamanSpiritPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, spirits);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"shaman-spirit--" + id}
		topLink={["Shaman Spirits", "ability/shaman_spirits"]}
	>{jsx}</BasicPage>;
};

export default ShamanSpiritPage;
