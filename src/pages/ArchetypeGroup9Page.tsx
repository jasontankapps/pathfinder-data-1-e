import { useParams } from 'wouter';
import Slayer, { test as test1 } from './subpages/__arc-slayer';
import Spiritualist, { test as test2 } from './subpages/__arc-spiritualist';
import Vigilante, { test as test3 } from './subpages/__arc-vigilante';
import Witch, { test as test4 } from './subpages/__arc-witch';
import Summoner, { test as test5 } from './subpages/__arc-summoner';
import './Page.css';

/*
	slayer: [9, "Slayer"], //26; conflicts with rogue
	spiritualist: [9, "Spiritualist"], //24; conflicts with summoner
	summoner: [9, "Summoner"], //22; conflicts with unchained summoner, occultist, spiritualist
	vigilante: [9, "Vigilante"], //28; conflicts with barbarian
	witch: [9, "Witch"], //43
*/

type Params = { id?: string, parent?: "slayer" | "spiritualist" | "summoner" | "vigilante" | "witch" };

const ArchetypeGroup9Page: React.FC = () => {

	const { id = "not_found", parent = "summoner" } = useParams<Params>();

	switch (parent) {
		case "slayer": {
			return <Slayer id={test1(id) ? id : "not_found"} />;
		}
		case "spiritualist": {
			return <Spiritualist id={test2(id) ? id : "not_found"} />;
		}
		case "vigilante": {
			return <Vigilante id={test3(id) ? id : "not_found"} />;
		}
		case "witch": {
			return <Witch id={test4(id) ? id : "not_found"} />;
		}
	}

	return <Summoner id={test5(id) ? id : "not_found"} />;
};

export default ArchetypeGroup9Page;
