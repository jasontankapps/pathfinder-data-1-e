import { useParams } from 'wouter';
import Inquisitor, { test as test1 } from './subpages/__arc-inquisitor';
import Kineticist, { test as test2 } from './subpages/__arc-kineticist';
import Magus, { test as test3 } from './subpages/__arc-magus';
import Mesmerist, { test as test4 } from './subpages/__arc-mesmerist';
import Ninja, { test as test5 } from './subpages/__arc-ninja';
import Wizard, { test as test6 } from './subpages/__arc-wizard';
import './Page.css';

/*
	inquisitor: [5, "Inquisitor"], //38; conflicts with familiar, investigator, ranger
	kineticist: [5, "Kineticist"], //19
	magus: [5, "Magus"], //31
	mesmerist: [5, "Mesmerist"], //21
	ninja: [5, "Ninja"], //18
	wizard: [5, "Wizard"], //10; conflicts with cleric, bloodrager
*/

type Params = { id?: string, parent?: "inquisitor" | "kineticist" | "magus" | "mesmerist" | "ninja" | "wizard" };

const ArchetypeGroup5Page: React.FC = () => {

	const { id = "not_found", parent = "wizard" } = useParams<Params>();

	switch (parent) {
		case "inquisitor": {
			return <Inquisitor id={test1(id) ? id : "not_found"} />;
		}
		case "kineticist": {
			return <Kineticist id={test2(id) ? id : "not_found"} />;
		}
		case "magus": {
			return <Magus id={test3(id) ? id : "not_found"} />;
		}
		case "mesmerist": {
			return <Mesmerist id={test4(id) ? id : "not_found"} />;
		}
		case "ninja": {
			return <Ninja id={test5(id) ? id : "not_found"} />;
		}
	}

	return <Wizard id={test6(id) ? id : "not_found"} />;
};

export default ArchetypeGroup5Page;
