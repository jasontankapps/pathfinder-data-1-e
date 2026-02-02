import { useParams } from 'wouter';
import Investigator, { test as test1 } from './subpages/__arc-investigator';
import Monk, { test as test2 } from './subpages/__arc-monk';
import Occultist, { test as test3 } from './subpages/__arc-occultist';
import Warpriest, { test as test4 } from './subpages/__arc-warpriest';
import UnchainedSummoner, { test as test5 } from './subpages/__arc-unchained_summoner';
import './Page.css';

/*
	investigator: [6, "Investigator"], //37; conflicts with familiar, inquisitor, ranger
	monk: [6, "Monk"], //70
	occultist: [6, "Occultist"], //20; conflicts with summoner
	warpriest: [6, "Warpriest"], //18
	unchained_summoner: [6, "Unchained Summoner"], //10; conflicts with summoner
*/

type Params = { id?: string, parent?: "investigator" | "monk" | "occultist" | "warpriest" | "unchained_summoner" };

const ArchetypeGroup6Page: React.FC = () => {

	const { id = "not_found", parent = "unchained_summoner" } = useParams<Params>();

	switch (parent) {
		case "investigator": {
			return <Investigator id={test1(id) ? id : "not_found"} />;
		}
		case "monk": {
			return <Monk id={test2(id) ? id : "not_found"} />;
		}
		case "occultist": {
			return <Occultist id={test3(id) ? id : "not_found"} />;
		}
		case "warpriest": {
			return <Warpriest id={test4(id) ? id : "not_found"} />;
		}
	}

	return <UnchainedSummoner id={test5(id) ? id : "not_found"} />;
};

export default ArchetypeGroup6Page;
