import { useParams } from 'wouter';
import skills from './subpages/__skill';
import './Page.css';

type Params = { id?: string };

const SkillPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = skills[id] || skills.not_found;

	return <Page />;
};

export default SkillPage;
