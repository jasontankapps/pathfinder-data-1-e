import { useParams } from 'wouter';
import getItem from '../components/getItem';
import skills from './subpages/__skill';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './Page.css';

type Data = typeof skills;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["All Skills", "main/skills"];

const SkillPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, notBookmarkable } = getItem<Data>(id, skills);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/skill/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default SkillPage;
