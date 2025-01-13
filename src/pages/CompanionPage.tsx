import { useParams } from 'wouter';
import getItem from '../components/getItem';
import companions from './subpages/__druidcompanion';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Druid", "class/druid"],
	["Animal Companions", "ability/druid_companions"]
];

type Data = typeof companions;

type Params = { id?: keyof Data };

const CompanionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id as keyof Data, companions);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"companion--" + id}
		topLink={["Animal Companions", "ability/druid_companions"]}
	>{jsx}</BasicPage>;
};

export default CompanionPage;
