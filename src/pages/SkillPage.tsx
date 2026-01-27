import { useParams } from 'wouter';
import skills from './subpages/__skill';
import './Page.css';

type Data = typeof skills;

type Params = { id?: keyof Data };

const SkillPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? skills[id] || skills.not_found : skills.not_found;

	return <Page />;
};

export default SkillPage;
