import main from '../json/main14.json';
import { isId, isMain } from '../components/mainAssertions';
import BasicMainPage from './BasicMainPage';
import './Page.css';

const MainGroup14Page: React.FC<{id: string}> = ({id}) => {

	isId(id, main);
	const data = main[id];
	isMain(data);
	const { title, description, tables, previous: hierarchy, sources, singleTable } = data;

	return <BasicMainPage title={title} description={description} tables={tables} hierarchy={hierarchy} sources={sources} singleTable={singleTable} />;
};

export default MainGroup14Page;
