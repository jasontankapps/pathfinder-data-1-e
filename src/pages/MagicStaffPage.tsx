import { useParams } from 'react-router';
import getItem from '../components/getItem';
import magic from '../json/magic_staff.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Magic Items", "main/magic"], ["Magic Staves", "main/magic_staves"]];

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>(id, magic);

	return <BasicPage
		title={title}
		markdown={markdown}
		tables={tables}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"magic-staff/" + id}
	/>;
};

export default MagicPage;
