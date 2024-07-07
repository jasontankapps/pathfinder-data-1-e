import { useParams } from 'react-router';
import getItem from '../components/getItem';
import umr from '../json/umr.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Universal Monster Rules", "main/umr"]
];

type Data = typeof umr;

type Params = { id?: keyof Data };

const UMRPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, sources } = getItem<Data>(id, umr);

	return <BasicPage title={title} displayItem={{markdown}} {...{hierarchy, sources}} />;
};

export default UMRPage;
