import main from '../json/main03.json';
import { JsonDataPropsMain } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof main;

const MainGroup01Page: React.FC<{id: string}> = ({id}) => {

	const { title, description: markdown, tables, previous: hierarchy, sources } = (main[id as keyof Data]) as JsonDataPropsMain;

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default MainGroup01Page;
