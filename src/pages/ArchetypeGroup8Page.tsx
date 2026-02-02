import { useParams } from 'wouter';
import Rogue, { test as test1 } from './subpages/__arc-rogue';
import Skald, { test as test2 } from './subpages/__arc-skald';
import Sorcerer, { test as test3 } from './subpages/__arc-sorcerer';
import Swashbuckler, { test as test4 } from './subpages/__arc-swashbuckler';
import Samurai, { test as test5 } from './subpages/__arc-samurai';
import './Page.css';

/*
	rogue: [8, "Rogue"], //78; conflicts with bard, slayer, hunter
	samurai: [8, "Samurai"], //7
	skald: [8, "Skald"], //26; conflicts with fighter
	sorcerer: [8, "Sorcerer"], //13; conflicts with oracle
	swashbuckler: [8, "Swashbuckler"], //20; conflicts with cavalier
*/

type Params = { id?: string, parent?: "rogue" | "skald" | "sorcerer" | "swashbuckler" | "samurai" };

const ArchetypeGroup8Page: React.FC = () => {

	const { id = "not_found", parent = "samurai" } = useParams<Params>();

	switch (parent) {
		case "rogue": {
			return <Rogue id={test1(id) ? id : "not_found"} />;
		}
		case "skald": {
			return <Skald id={test2(id) ? id : "not_found"} />;
		}
		case "sorcerer": {
			return <Sorcerer id={test3(id) ? id : "not_found"} />;
		}
		case "swashbuckler": {
			return <Swashbuckler id={test4(id) ? id : "not_found"} />;
		}
	}

	return <Samurai id={test5(id) ? id : "not_found"} />;
};

export default ArchetypeGroup8Page;
