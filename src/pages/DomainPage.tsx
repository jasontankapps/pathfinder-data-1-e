import { useParams } from 'wouter';
import Domains1, { test as test1 } from './subpages/__domain01';
import Domains2, { test as test2 } from './subpages/__domain02';
import './Page.css';

type Params = { id?: string };

const DomainPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Domains1 id={id} />;
	}
	if(test2(id)) {
		return <Domains2 id={id} />;
	}

	return <Domains1 id="not_found" />;
};

export default DomainPage;
