import { useLocation, useParams } from 'wouter';
import getItem from '../components/getItem';
import curses from './subpages/_GEN_curse';
import diseases from './subpages/_GEN_disease';
import infestations from './subpages/_GEN_infestation';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './Page.css';

type Affliction = "curse" | "disease" | "infestation";

type DataCurse = typeof curses;
type DataDisease = typeof diseases;
type DataInfestation = typeof infestations;

type Id = keyof DataCurse & keyof DataDisease & keyof DataInfestation;

type Params = { id?: Id };

const topCurse: Hierarchy = ["Curses", "rule/curses"];
const topDisease: Hierarchy = ["Diseases", "rule/diseases"];
const topInfestation: Hierarchy = ["Infestations", "rule/infestations"];
const basicAfflictionsPage: Hierarchy = ["Afflictions", "rule/afflictions"];

const getByType = (id: Id | undefined, type: Affliction) => {
	switch(type) {
		case "curse":
			return {...getItem<DataCurse>(id, curses), topLink: topCurse};
		case "disease":
			return {...getItem<DataDisease>(id, diseases), topLink: topDisease};
		case "infestation":
			return {...getItem<DataInfestation>(id, infestations), topLink: topInfestation};
	}
};

const AfflictionPage: React.FC = () => {

	const [ path ] = useLocation();
	const { id } = useParams<Params>();

	const m = path.match(/^[/](curse|disease|infestation)[/]/);

	const type: Affliction = m ? m[1] as Affliction : "curse";

	const pageId = `/${type}/${id}`;

	const { hasJL, title, jsx, topLink, notBookmarkable, className } = getByType(id, type);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={pageId}
		topLink={topLink || basicAfflictionsPage}
		notBookmarkable={notBookmarkable}
		className={className}
	>{jsx}</BasicPage>;
};

export default AfflictionPage;
