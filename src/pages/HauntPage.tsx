import { useParams } from 'react-router';
import getItem from '../components/getItem';
import haunts from './subpages/__haunt';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Gamemastering", "rule/gamemastering"],
	["Gamemastery Guide", "rule/gamemastery_guide"],
	["Advanced Topics", "rule/advanced_topics"],
	["Haunts (Rules)", "rule/haunts"],
	["Haunts", "main/haunts"]
];

type Data = typeof haunts;

type Params = { id?: keyof Data };

const HauntPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, haunts);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"haunt--" + id}
		topLink={["Haunts", "main/haunts"]}
	>{jsx}</BasicPage>;
};

export default HauntPage;
