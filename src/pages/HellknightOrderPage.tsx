import { useParams } from 'react-router';
import getItem from '../components/getItem';
import orders from '../json/class_ability_hellknight_orders.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Hellknight", "prestigeclass/hellknight"],
	["Hellknight Orders", "ability/hellknight_orders"]
];

type Data = typeof orders;

type Params = { id?: keyof Data };

const HellknightOrderPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, orders);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;
};

export default HellknightOrderPage;
