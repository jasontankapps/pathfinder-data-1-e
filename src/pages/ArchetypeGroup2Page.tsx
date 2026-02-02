import { useParams } from 'wouter';
import Bard, { test as test1 } from './subpages/__arc-bard';
import Bloodrager, { test as test2 } from './subpages/__arc-bloodrager';
import Cavalier, { test as test3 } from './subpages/__arc-cavalier';
import Brawler, { test as test4 } from './subpages/__arc-brawler';
import './Page.css';

/*
	bard: [2, "Bard"], //73; conflicts with companion, familiar, gunslinger, rogue
	bloodrager: [2, "Bloodrager"], //19; conflicts with shifter, wizard
	brawler: [2, "Brawler"], // 19
	cavalier: [2, "Cavalier"], //37; conflicts with companion, familiar, swashbuckler
*/

type Params = { id?: string, parent?: "bard" | "bloodrager" | "brawler" | "cavalier" };

const ArchetypeGroup2Page: React.FC = () => {

	const { id = "not_found", parent = "brawler" } = useParams<Params>();

	switch (parent) {
		case "bard": {
			return <Bard id={test1(id) ? id : "not_found"} />;
		}
		case "bloodrager": {
			return <Bloodrager id={test2(id) ? id : "not_found"} />;
		}
		case "cavalier": {
			return <Cavalier id={test3(id) ? id : "not_found"} />;
		}
	}

	return <Brawler id={test4(id) ? id : "not_found"} />;
};

export default ArchetypeGroup2Page;
