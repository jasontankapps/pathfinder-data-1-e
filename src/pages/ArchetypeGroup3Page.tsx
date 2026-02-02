import { useParams } from 'wouter';
import Cleric, { test as test1 } from './subpages/__arc-cleric';
import Companion, { test as test2 } from './subpages/__arc-companion';
import Druid, { test as test3 } from './subpages/__arc-druid';
import Shaman, { test as test4 } from './subpages/__arc-shaman';
import './Page.css';

/*
	cleric: [3, "Cleric"], //35; conflicts with wizard
	companion: [3, "Companion"], //21; conflicts with cavalier, bard
	druid: [3, "Druid"], //75
	shaman: [3, "Shaman"], //17
*/

type Params = { id?: string, parent?: "cleric" | "companion" | "druid" | "shaman" };

const ArchetypeGroup3Page: React.FC = () => {

	const { id = "not_found", parent = "shaman" } = useParams<Params>();

	switch (parent) {
		case "cleric": {
			return <Cleric id={test1(id) ? id : "not_found"} />;
		}
		case "companion": {
			return <Companion id={test2(id) ? id : "not_found"} />;
		}
		case "druid": {
			return <Druid id={test3(id) ? id : "not_found"} />;
		}
	}

	return <Shaman id={test4(id) ? id : "not_found"} />;
};

export default ArchetypeGroup3Page;
