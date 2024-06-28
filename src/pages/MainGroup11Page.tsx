import main from '../json/main11.json';
import { HierarchyArray, Table } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof main;

const MainGroup01Page: React.FC<{id: string}> = ({id}) => {

	const { title, description: markdown, tables, previous, sources } = (main[id as keyof Data]);

	const hierarchy: HierarchyArray = previous.map(group => {
		const [one, two] = group;
		return [one || "", two || ""];
	});

	return <BasicPage title={title} displayItem={{markdown, tables: (tables as Table[])}} {...{hierarchy, sources}} />;
};

export default MainGroup01Page;
