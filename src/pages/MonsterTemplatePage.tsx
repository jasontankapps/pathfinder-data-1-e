import { useParams } from 'wouter';
import template1 from './subpages/__template01';
import template2 from './subpages/__template02';
import template3 from './subpages/__template03';
import template4 from './subpages/__template04';
import './Page.css';

type Data =
	typeof template1 | typeof template2 | typeof template3 | typeof template4;

type Params = { id?: keyof Data };

const MonsterTemplatePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id && (
		template1[id] || template2[id] || template3[id] || template4[id]
	) || template1.not_found;

	return <Page />;

};

export default MonsterTemplatePage;
