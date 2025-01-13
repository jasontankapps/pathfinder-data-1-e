import React from 'react';
import { useParams } from 'wouter';
import getItem from '../components/getItem';
import equipment from './subpages/__eq-siegeengine';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Siege Engine", "main/equipment_siegeengines"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSiegeEnginePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"eq-siegeengines--" + id}
		topLink={["Siege Engine", "main/equipment_siegeengines"]}
	>{jsx}</BasicPage>;
};

export default EquipmentSiegeEnginePage;
