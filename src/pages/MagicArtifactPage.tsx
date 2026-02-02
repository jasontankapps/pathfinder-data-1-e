import { useParams } from 'wouter';
import Magicartifact1, { test as test1 } from './subpages/__magic-artifact01';
import Magicartifact2, { test as test2 } from './subpages/__magic-artifact02';
import Magicartifact3, { test as test3 } from './subpages/__magic-artifact03';
import './Page.css';

type Params = { id?: string };

const MagicArtifactPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Magicartifact1 id={id} />;
	}
	if(test2(id)) {
		return <Magicartifact2 id={id} />;
	}
	if(test3(id)) {
		return <Magicartifact3 id={id} />;
	}

	return <Magicartifact1 id="not_found" />;

};

export default MagicArtifactPage;
