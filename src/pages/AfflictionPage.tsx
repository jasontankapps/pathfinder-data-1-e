import { useLocation, useParams } from 'wouter';
import getItem from '../components/getItem';
import curses from './subpages/__curse';
import diseases from './subpages/__disease';
import infestations from './subpages/__infestation';
import BasicPage from './BasicPage';
import { Hierarchy, HierarchyArray } from '../types';
import './Page.css';

type Affliction = "curse" | "disease" | "infestation";

type DataCurse = typeof curses;
type DataDisease = typeof diseases;
type DataInfestation = typeof infestations;

type Id = keyof DataCurse & keyof DataDisease & keyof DataInfestation;

type Params = { id?: Id };

const topCurse: HierarchyArray = [["Curses", "rule/curses"]];
const topDisease: HierarchyArray = [["Curses", "rule/curses"]];
const topInfestation: HierarchyArray = [["Curses", "rule/curses"]];

const getByType = (id: Id | undefined, type: Affliction) => {
	switch(type) {
		case "curse":
			return {...getItem<DataCurse>(id, curses), subhierarchy: topCurse};
		case "disease":
			return {...getItem<DataDisease>(id, diseases), subhierarchy: topDisease};
		case "infestation":
			return {...getItem<DataInfestation>(id, infestations), subhierarchy: topInfestation};
	}
};

const basicAfflictionsPage: Hierarchy = ["Afflictions", "rule/afflictions"];

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
		sources={sources}
		pageId={pageId}
		topLink={subhierarchy.length ? subhierarchy[0] : basicAfflictionsPage}
	>{jsx}</BasicPage>;
};

export default AfflictionPage;
