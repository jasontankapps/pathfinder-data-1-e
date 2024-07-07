import main from '../json/main20.json';
import { isId, isMain } from '../components/mainAssertions';
import BasicMainPage from './BasicMainPage';
import './Page.css';

const MainGroup20Page: React.FC<{id: string}> = ({id}) => {

	isId(id, main);
	const data = main[id];
	isMain(data);
	const { title, description, tables, previous: hierarchy, sources } = data;

	return <BasicMainPage title={title} displayItem={{description, tables}} {...{hierarchy, sources}} />;
};

export default MainGroup20Page;
