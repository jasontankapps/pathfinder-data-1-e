import { useParams } from 'wouter';
import npc1 from './subpages/__npc01';
import npc2 from './subpages/__npc02';
import npc3 from './subpages/__npc03';
import npc4 from './subpages/__npc04';
import npc5 from './subpages/__npc05';
import npc6 from './subpages/__npc06';
import npc7 from './subpages/__npc07';
import npc8 from './subpages/__npc08';
import './Page.css';

type Data =
	typeof npc1 | typeof npc2 | typeof npc3 | typeof npc4
	| typeof npc5 | typeof npc6 | typeof npc7 | typeof npc8;

type Params = { id?: keyof Data };

const NPCPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id && (
		npc1[id] || npc2[id] || npc3[id] || npc4[id]
		|| npc5[id] || npc6[id] || npc7[id] || npc8[id]
	) || npc1.not_found;

	return <Page />;

};

export default NPCPage;
