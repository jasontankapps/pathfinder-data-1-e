import { useParams } from 'react-router';
import getItem from '../components/getItem';
import curses from '../json/curses.json';
import diseases from '../json/diseases.json';
import infestations from '../json/infestations.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Rules", "main/rules"],
	["Combat", "rule/combat"],
	["Special Abilities", "rule/special_abilities_2"],
	["Afflictions", "rule/afflictions"]
];

type Affliction = "curse" | "disease" | "infestation";

type DataCurse = typeof curses;
type DataDisease = typeof diseases;
type DataInfestation = typeof infestations;

type Id = keyof DataCurse & keyof DataDisease & keyof DataInfestation;

type Params = { id?: Id };

const getByType = (id: Id | undefined, type: Affliction) => {
	switch(type) {
		case "curse":
			return {...getItem<DataCurse>(id, curses), subhierarchy: [["Curses", "rule/curses"]] as HierarchyArray};
		case "disease":
			return {...getItem<DataDisease>(id, diseases), subhierarchy: [["Diseases", "rule/diseases"]] as HierarchyArray};
		case "infestation":
			return {...getItem<DataInfestation>(id, infestations), subhierarchy: [["Infestations", "rule/infestations"]] as HierarchyArray};
	}
};

const AfflictionPage: React.FC<{type: Affliction }> = ({type}) => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getByType(id, type);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default AfflictionPage;
