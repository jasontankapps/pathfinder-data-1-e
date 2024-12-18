import React from 'react';
import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from './subpages/__equipment-siegeengine';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Siege Engine", "main/equipment_siegeengines"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSiegeEnginePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"equipment-siegeengines--" + id}
		topLink={["Siege Engine", "main/equipment_siegeengines"]}
	>{jsx}</BasicPage>;
};

export default EquipmentSiegeEnginePage;
