import React from 'react';
import { useParams } from 'react-router';
import getItem from '../components/getItem';
import equipment from '../json/equipment_siege_engines.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Equipment", "main/equipment"], ["Siege Engine", "main/equipment_siegeengines"]];

type Data = typeof equipment;

type Params = { id?: keyof Data };

const EquipmentSiegeEnginePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, equipment);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;
};

export default EquipmentSiegeEnginePage;
