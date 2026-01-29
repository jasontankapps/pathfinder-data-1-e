import { useParams } from 'wouter';
import magicartifact1 from './subpages/__magic-artifact01';
import magicartifact2 from './subpages/__magic-artifact02';
import magicartifact3 from './subpages/__magic-artifact03';
import './Page.css';

type Data =
	typeof magicartifact1 | typeof magicartifact2 | typeof magicartifact3;

type Params = { id?: keyof Data };

const MagicArtifactPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = magicartifact1[id] || magicartifact2[id]
		|| magicartifact3[id] || magicartifact1.not_found;

	return <Page />;

};

export default MagicArtifactPage;
