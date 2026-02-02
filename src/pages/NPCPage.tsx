import { useParams } from 'wouter';
import Npc1, { test as test1 } from './subpages/__npc01';
import Npc2, { test as test2 } from './subpages/__npc02';
import Npc3, { test as test3 } from './subpages/__npc03';
import Npc4, { test as test4 } from './subpages/__npc04';
import Npc5, { test as test5 } from './subpages/__npc05';
import Npc6, { test as test6 } from './subpages/__npc06';
import Npc7, { test as test7 } from './subpages/__npc07';
import Npc8, { test as test8 } from './subpages/__npc08';
import './Page.css';

type Params = { id?: string };

const NPCPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Npc1 id={id} />;
	}
	if(test2(id)) {
		return <Npc2 id={id} />;
	}
	if(test3(id)) {
		return <Npc3 id={id} />;
	}
	if(test4(id)) {
		return <Npc4 id={id} />;
	}
	if(test5(id)) {
		return <Npc5 id={id} />;
	}
	if(test6(id)) {
		return <Npc6 id={id} />;
	}
	if(test7(id)) {
		return <Npc7 id={id} />;
	}
	if(test8(id)) {
		return <Npc8 id={id} />;
	}

	return <Npc1 id="not_found" />;

};

export default NPCPage;
