import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import schools from './subpages/_GEN_arcaneschool';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof schools;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Arcane Schools", "ability/arcane_schools"];

const SchoolPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, schools);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/arcaneschool/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default SchoolPage;
