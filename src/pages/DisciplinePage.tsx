import { useParams } from 'react-router';
import getItem from '../components/getItem';
import disciplines from './subpages/__discipline';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Psychic", "class/psychic"],
	["Disciplines", "ability/disciplines"]
];

type Data = typeof disciplines;

type Params = { id?: keyof Data };

const DiscliplinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, disciplines);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"discipline--" + id}
		topLink={["Psychic Disciplines", "ability/disciplines"]}
	>{jsx}</BasicPage>;
};

export default DiscliplinePage;
