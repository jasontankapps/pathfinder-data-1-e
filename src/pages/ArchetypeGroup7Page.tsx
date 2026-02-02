import { useParams } from 'wouter';
import Oracle, { test as test1 } from './subpages/__arc-oracle';
import Paladin, { test as test2 } from './subpages/__arc-paladin';
import Ranger, { test as test3 } from './subpages/__arc-ranger';
import Shifter, { test as test4 } from './subpages/__arc-shifter';
import './Page.css';

/*
	oracle: [7, "Oracle"], //26; conflicts with sorcerer
	paladin: [7, "Paladin"], //47; conflicts with hunter
	ranger: [7, "Ranger"], //62; conflicts with fighter, familiar, inquisitor, investigator
	shifter: [7, "Shifter"], //14; conflicts with bloodrager
*/

type Params = { id?: string, parent?: "oracle" | "paladin" | "ranger" | "shifter" };

const ArchetypeGroup7Page: React.FC = () => {

	const { id = "not_found", parent = "shifter" } = useParams<Params>();

	switch (parent) {
		case "oracle": {
			return <Oracle id={test1(id) ? id : "not_found"} />;
		}
		case "paladin": {
			return <Paladin id={test2(id) ? id : "not_found"} />;
		}
		case "ranger": {
			return <Ranger id={test3(id) ? id : "not_found"} />;
		}
	}

	return <Shifter id={test4(id) ? id : "not_found"} />;
};

export default ArchetypeGroup7Page;
