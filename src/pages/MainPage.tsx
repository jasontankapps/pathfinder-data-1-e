import { useParams } from 'react-router';
import main1 from '../json/main.json';
import main2 from '../json/main2.json';
import main3 from '../json/main3.json';
import BasicPage from './BasicPage';
import { JsonDataPropsMain } from '../types';
import './Page.css';

const main = {...main1, ...main2, ...main3};

const MainPage: React.FC = () => {

	const { mainpage } = useParams<{ mainpage?: keyof typeof main; }>();

	const { title, description: markdown, tables, previous: hierarchy, sources } = (main[mainpage || "main"] || main.main) as JsonDataPropsMain;

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy, sources}} />;
};

export default MainPage;
