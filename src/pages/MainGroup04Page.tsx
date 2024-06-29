import main from '../json/main04.json';
import { JsonDataPropsMain } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof main;

declare function isId(value: unknown): asserts value is keyof Data;
declare function isMain(value: unknown): asserts value is JsonDataPropsMain;

const MainGroup04Page: React.FC<{id: string}> = ({id}) => {

	isId(id);
	const data = main[id];
	isMain(data);
	const { title, description: markdown, tables, previous: hierarchy, sources } = data;

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default MainGroup04Page;
