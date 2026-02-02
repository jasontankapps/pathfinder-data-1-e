import { useParams } from 'wouter';
import Magicenh1, { test as test1 } from './subpages/__magic-enh01';
import Magicenh2, { test as test2 } from './subpages/__magic-enh02';
import './Page.css';

type Params = { id?: string };

const MagicEnhancementPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Magicenh1 id={id} />;
	}
	if(test2(id)) {
		return <Magicenh2 id={id} />;
	}

	return <Magicenh1 id="not_found" />;

};

export default MagicEnhancementPage;
