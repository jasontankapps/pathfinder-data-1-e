import { getGuaranteedItem } from '../components/getItem';
import main from './subpages/__main36';
import BasicPage from './BasicPage';
import './Page.css';

interface MainPageProps {
	id: string
}

type Data = typeof main;

const MainGroup36Page: React.FC<MainPageProps> = ({ id }) => {

	const { title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), main);

	return <BasicPage
		pageId={"main--" + id}
		title={title}
		hierarchy={subhierarchy}
		sources={sources}
		className="main"
	>{jsx}</BasicPage>;
};

export default MainGroup36Page;
