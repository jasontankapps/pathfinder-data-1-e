import { useParams } from 'wouter';
import trait1 from './subpages/__trait01';
import trait2 from './subpages/__trait02';
import trait3 from './subpages/__trait03';
import trait4 from './subpages/__trait04';
import trait5 from './subpages/__trait05';
import './Page.css';

type Params = { id?: string };

const TraitPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = trait1[id] || trait2[id] || trait3[id]
		|| trait4 || trait5[id] || trait1.not_found;

	return <Page />;

};

export default TraitPage;
