import { useParams } from 'react-router';
import getItem from '../components/getItem';
import domains from '../json/class_ability_druid_domains.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Druid", "class/druid"],
	["Druid Domains", "ability/druid_domains"]
];

type Data = typeof domains;

type Params = { id?: keyof Data };

const DruidDomainPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, domains);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;
};

export default DruidDomainPage;
