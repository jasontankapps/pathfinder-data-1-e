import React from 'react';
import { useParams } from 'wouter';
import Equipment, { test } from './subpages/__eq-siegeengine';
import './Page.css';

type Params = { id?: string };

const EquipmentSiegeEnginePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Equipment id={test(id) ? id : "not_found"} />;
};

export default EquipmentSiegeEnginePage;
