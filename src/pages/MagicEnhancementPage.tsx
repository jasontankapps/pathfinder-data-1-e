import { useParams } from 'wouter';
import magicenh1 from './subpages/__magic-enh01';
import magicenh2 from './subpages/__magic-enh02';
import './Page.css';

type Data = typeof magicenh1 | typeof magicenh2;

type Params = { id?: keyof Data };

const MagicEnhancementPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id && (magicenh1[id] || magicenh2[id]) || magicenh1.not_found;

	return <Page />;

};

export default MagicEnhancementPage;
