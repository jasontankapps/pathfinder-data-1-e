import { useParams } from 'wouter';
import getItem from '../components/getItem';
import schools from './subpages/__arcaneschool';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof schools;

type Params = { id?: keyof Data };

const SchoolPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, } = getItem<Data>(id, schools);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/arcaneschool/" + id}
		topLink={["Arcane Schools", "ability/arcane_schools"]}
	>{jsx}</BasicPage>;
};

export default SchoolPage;
