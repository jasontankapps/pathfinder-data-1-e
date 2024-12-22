import { getGuaranteedItem } from '../components/getItem';
import main from './subpages/__main34';
import BasicPage from './BasicPage';
import './Page.css';

interface MainPageProps {
	id: string
}

type Data = typeof main;

const MainGroup34Page: React.FC<MainPageProps> = ({ id }) => {

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getGuaranteedItem<Data>((id as keyof Data), main);

	return <BasicPage
		hasJL={hasJL}
			pageId={"main--" + id}
		title={title}
		hierarchy={subhierarchy}
		sources={sources}
		className="main"
	>{jsx}</BasicPage>;
};

export default MainGroup34Page;