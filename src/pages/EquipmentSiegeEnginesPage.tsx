import React from 'react';
import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import equipment from './subpages/__eq-siegeengine';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Siege Engine", "main/equipment_siegeengines"];

const EquipmentSiegeEnginePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/eq-siegeengine/" + id}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default EquipmentSiegeEnginePage;
