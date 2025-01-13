import { useParams } from 'wouter';
import getItem from '../components/getItem';
import skills from './subpages/__skill';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/skills"], ["Skills", "main/skills"]];

type Data = typeof skills;

type Params = { id?: keyof Data };

const SkillPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, skills);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={hierarchy}
		sources={sources}
		pageId={"skill--" + id}
		topLink={["All Skills", "main/skills"]}
	>{jsx}</BasicPage>;
};

export default SkillPage;
