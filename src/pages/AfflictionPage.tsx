import { useLocation, useParams } from 'wouter';
import curses from './subpages/__curse';
import diseases from './subpages/__disease';
import infestations from './subpages/__infestation';
import './Page.css';

type Affliction = "curse" | "disease" | "infestation";

type Params = { id?: string };

const AfflictionPage: React.FC = () => {

	const [ path ] = useLocation();
	const { id = "not_found" } = useParams<Params>();

	const m = path.match(/^[/](curse|disease|infestation)[/]/);

	const type: Affliction = m ? m[1] as Affliction : "curse";

	const Page =
		(type === "curse")
			? curses[id] || curses.not_found
			: (type === "disease")
				? diseases[id] || diseases.not_found
				: infestations[id] || infestations.not_found;

	return <Page />;
};

export default AfflictionPage;
