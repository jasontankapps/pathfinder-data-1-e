import { useParams } from 'wouter';
import pclass1 from './subpages/__pclass01';
import pclass2 from './subpages/__pclass02';
import pclass3 from './subpages/__pclass03';
import pclass4 from './subpages/__pclass04';
import './Page.css';

type Params = { id?: string };

const PrestigeClassPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = pclass1[id] || pclass2[id] || pclass3[id]
		|| pclass4[id] || pclass1.not_found;

	return <Page />;

};

export default PrestigeClassPage;
