import { useParams } from 'react-router';
import getItem from '../components/getItem';
import domains from '../json/class_ability_domains.json';
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

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, domains);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"clericdomain/" + id}
	/>;
};

export default DomainPage;
