import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import equipment from './subpages/_GEN_tech-artifact';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Tech Artifacts", "main/tech_artifacts"];

const EquipmentTechArtifactPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/tech-artifact/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default EquipmentTechArtifactPage;
