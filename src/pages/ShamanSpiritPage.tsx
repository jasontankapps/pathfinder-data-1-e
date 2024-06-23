import { useParams } from 'react-router';
import getItem from '../components/getItem';
import spirits from '../json/class_ability_shaman_spirits.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Classes", "classes"],
	["Shaman", "class/shaman"],
	["Shaman Spirits", "ability/shaman_spirits"]
];

type Data = typeof spirits;

type Params = { id?: keyof Data };

const ShamanSpiritPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, spirits);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default ShamanSpiritPage;
