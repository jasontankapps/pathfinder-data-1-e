import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-reagent';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Equipment", "main/equipment"],
	["Alchemical Items", "main/equipment_alchemical"]
];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentAlchemicalReagentPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"eq-alchemicalreagent--" + id}
		topLink={["Alchemical Reagents", "main/equipment_reagents"]}
	>{jsx}</BasicPage>;
};

export default EquipmentAlchemicalReagentPage;
