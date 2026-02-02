import { useParams } from 'wouter';
import Alchemist, { test as test1 } from './subpages/__arc-alchemist';
import Antipaladin, { test as test2 } from './subpages/__arc-antipaladin';
import Arcanist, { test as test3 } from './subpages/__arc-arcanist';
import Medium, { test as test4 } from './subpages/__arc-medium';
import Barbarian, { test as test5 } from './subpages/__arc-barbarian';
import './Page.css';

/*
	alchemist: [1, "Alchemist"], //63
	antipaladin: [1, "Antipaladin"], //9
	arcanist: [1, "Arcanist"], //15
	barbarian: [1, "Barbarian"], //42; conflicts with vigilante
	medium: [1, "Medium"], //15
*/

type Params = { id?: string, parent?: "alchemist" | "antipaladin" | "arcanist" | "medium" | "barbarian" };

const ArchetypeGroup1Page: React.FC = () => {

	const { id = "not_found", parent = "barbarian" } = useParams<Params>();

	switch (parent) {
		case "alchemist": {
			return <Alchemist id={test1(id) ? id : "not_found"} />;
		}
		case "antipaladin": {
			return <Antipaladin id={test2(id) ? id : "not_found"} />;
		}
		case "arcanist": {
			return <Arcanist id={test3(id) ? id : "not_found"} />;
		}
		case "medium": {
			return <Medium id={test4(id) ? id : "not_found"} />;
		}
	}

	return <Barbarian id={test5(id) ? id : "not_found"} />;
};

export default ArchetypeGroup1Page;
