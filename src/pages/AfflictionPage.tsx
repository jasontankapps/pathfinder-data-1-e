import { useLocation, useParams } from 'wouter';
import getItem from '../components/getItem';
import curses from './subpages/__curse';
import diseases from './subpages/__disease';
import infestations from './subpages/__infestation';
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

const AfflictionPage: React.FC = () => {

	const [ path ] = useLocation();
	const { id } = useParams<Params>();

	const m = path.match(/^[/](curse|disease|infestation)[/]/);

	const type: Affliction = m ? m[1] as Affliction : "curse";

	const pageId = `/${type}/${id}`;

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getByType(id, type);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={pageId}
		topLink={subhierarchy.length ? subhierarchy[0] : ["Afflictions", "rule/afflictions"]}
	>{jsx}</BasicPage>;
};

export default AfflictionPage;
