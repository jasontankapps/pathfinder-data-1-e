import { useParams } from 'wouter';
import Skill, { test } from './subpages/__skill';
import './Page.css';

type Params = { id?: string };

const SkillPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	return <Skill id={test(id) ? id : "not_found"} />;
};

export default SkillPage;
