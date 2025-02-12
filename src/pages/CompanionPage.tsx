import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import companions from './subpages/__druidcompanion';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof companions;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Animal Companions", "ability/druid_companions"];

const CompanionPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id as keyof Data, companions);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={"/druidcompanion/" + id}
		topLink={topLink}
	>{jsx}</BasicPage>;
};

export default CompanionPage;
