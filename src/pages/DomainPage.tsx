import { useParams } from 'react-router';
import getItem from '../components/getItem';
import domains from './subpages/__domain';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Cleric", "class/cleric"],
	["Domains", "ability/domains"]
];

type Data = typeof domains;

type Params = { id?: keyof Data };

const DomainPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, domains);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"clericdomain--" + id}
		topLink={["Domains", "ability/domains"]}
	>{jsx}</BasicPage>;
};

export default DomainPage;
