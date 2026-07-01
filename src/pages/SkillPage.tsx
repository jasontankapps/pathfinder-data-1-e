import { useParams } from 'wouter';
import getItem from '../components/getItem';
import skills from './subpages/_GEN_skill';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './css/Page.css';

type Data = typeof skills;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Skill Descriptions", "rule/skill_descriptions"];

const SkillPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, skills);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/skill/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default SkillPage;
