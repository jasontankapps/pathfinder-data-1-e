import { useParams } from 'wouter';
import Familiar, { test as test1 } from './subpages/__arc-familiar';
import Fighter, { test as test2 } from './subpages/__arc-fighter';
import Gunslinger, { test as test3 } from './subpages/__arc-gunslinger';
import Hunter, { test as test4 } from './subpages/__arc-hunter';
import Psychic, { test as test5 } from './subpages/__arc-psychic';
import './Page.css';

/*
	familiar: [4, "Familiar"], //20; conflicts with cavalier, bard, inquisitor, investigator, ranger
	fighter: [4, "Fighter"], //67; conflicts with ranger, skald
	gunslinger: [4, "Gunslinger"], //23; conflicts with bard
	hunter: [4, "Hunter"], //21; conflicts with paladin, rogue
	psychic: [4, "Psychic"], //8
*/

type Params = { id?: string, parent?: "familiar" | "fighter" | "gunslinger" | "hunter" | "psychic" };

const ArchetypeGroup4Page: React.FC = () => {

	const { id = "not_found", parent = "psychic" } = useParams<Params>();

	switch (parent) {
		case "familiar": {
			return <Familiar id={test1(id) ? id : "not_found"} />;
		}
		case "fighter": {
			return <Fighter id={test2(id) ? id : "not_found"} />;
		}
		case "gunslinger": {
			return <Gunslinger id={test3(id) ? id : "not_found"} />;
		}
		case "hunter": {
			return <Hunter id={test4(id) ? id : "not_found"} />;
		}
	}

	return <Psychic id={test5(id) ? id : "not_found"} />;
};

export default ArchetypeGroup4Page;
