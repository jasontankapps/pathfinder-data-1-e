import main from '../json/main13.json';
import { isId, isMain } from '../components/mainAssertions';
import BasicPage from './BasicPage';
import './Page.css';

const MainGroup13Page: React.FC<{id: string}> = ({id}) => {

	isId(id, main);
	const data = main[id];
	isMain(data);
	const { title, description: markdown, tables, previous: hierarchy, sources } = data;

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default MainGroup13Page;
