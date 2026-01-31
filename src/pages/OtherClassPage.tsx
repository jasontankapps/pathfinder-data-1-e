import { useParams } from 'wouter';
import npcclass from './subpages/__npcclass';
import sidekick from './subpages/__sidekick';
import './Page.css';

type Params = { id?: string };

const OtherClassPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = npcclass[id] || sidekick[id] || npcclass.not_found;

	return <Page />;

};

export default OtherClassPage;
