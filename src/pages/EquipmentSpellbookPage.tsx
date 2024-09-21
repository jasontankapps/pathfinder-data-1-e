import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from '../json/equipment_spellbooks.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Spellbooks", "main/equipment_spellbook"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSpellbookPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"equipment-spellbook/" + id}
	/>;
};

export default EquipmentSpellbookPage;
