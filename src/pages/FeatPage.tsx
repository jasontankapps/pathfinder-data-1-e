import { useParams } from 'react-router';
import getItem from '../components/getItem';
import feats from '../json/feats.json';
import subs from '../json/feats_subhierarchy.json'
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Feats", "feats"], ["All Feats", "feats_all"]];

type Data = typeof feats;

type Params = { id?: keyof Data };

const FeatPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources } = getItem<Data>(id, feats);

	let pair: [string, string] | null = null;

	Object.entries(subs).some(([prop, value]) => {
		const found = value.indexOf(id || "unknown");
		if(found > 0) {
			pair = [value[0], prop as string];
			return true;
		}
		return false;
	});

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...(pair ? [pair] : [])], sources}} />;
};

export default FeatPage;
