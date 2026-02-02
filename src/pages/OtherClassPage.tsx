import { useParams } from 'wouter';
import Npcclass, { test as test1 } from './subpages/__npcclass';
import Sidekick, { test as test2 } from './subpages/__sidekick';
import './Page.css';

type Params = { id?: string };

const OtherClassPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Npcclass id={id} />;
	}
	if(test2(id)) {
		return <Sidekick id={id} />;
	}

	return <Npcclass id="not_found" />;

};

export default OtherClassPage;
