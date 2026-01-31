import { useParams } from 'wouter';
import template1 from './subpages/__template01';
import template2 from './subpages/__template02';
import template3 from './subpages/__template03';
import template4 from './subpages/__template04';
import './Page.css';

type Params = { id?: string };

const MonsterTemplatePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = template1[id] || template2[id] || template3[id] || template4[id]
		|| template1.not_found;

	return <Page />;

};

export default MonsterTemplatePage;
