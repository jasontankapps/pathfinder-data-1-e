import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from '../json/equipment_tech_pharmaceuticals.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Tech Pharmaceuticals", "main/tech_pharmaceuticals"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentTechPharmaceuticalsPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"tech-pharma--" + id}
	/>;
};

export default EquipmentTechPharmaceuticalsPage;
