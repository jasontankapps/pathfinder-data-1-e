import { useParams } from 'react-router';
import getItem from '../components/getItem';
import skills from '../json/skills.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/skills"], ["Skills", "main/skills"]];

type Data = typeof skills;

type Params = { id?: keyof Data };

const SkillPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, skills);

	return <BasicPage title={title} markdown={markdown} tables={tables} hierarchy={hierarchy} sources={sources} />;
};

export default SkillPage;
