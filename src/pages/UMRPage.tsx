import { useParams } from 'react-router';
import getItem from '../components/getItem';
import umr from '../json/umr.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["All Rules", "main/rules"],
	["Universal Monster Rules", "main/umr"]
];

type Data = typeof umr;

type Params = { id?: keyof Data };

const UMRPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, sources } = getItem<Data>(id, umr);

	return <BasicPage
		title={title}
		markdown={markdown}
		/* tables={tables} */
		hierarchy={hierarchy}
		sources={sources}
		pageId={"umr/" + id}
	/>;
};

export default UMRPage;
