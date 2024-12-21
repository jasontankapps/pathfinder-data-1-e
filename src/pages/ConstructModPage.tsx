import { useParams } from 'react-router';
import getItem from '../components/getItem';
import constructmods from './subpages/__constructmod';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Rules", "main/rules"],
	["Advanced Magic Topics", "rule/advanced_magic_topics"],
	["Building/Modifying Constructs", "rule/building_and_modifying_constructs"],
	["Construct Modifications", "rule/construct_modifications"]
];

type Data = typeof constructmods;

type Params = { id?: keyof Data };

const ConstructModPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, constructmods);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"constructmod--" + id}
		topLink={["Construct Modifications", "rule/construct_modifications"]}
	>{jsx}</BasicPage>;
};

export default ConstructModPage;
