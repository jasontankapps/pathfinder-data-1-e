import { useParams } from 'wouter';
import bloodlines from './subpages/__blrgbloodline';
import './Page.css';

type Data = typeof bloodlines;

type Params = { id?: keyof Data };

const BloodragerBloodlinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? bloodlines[id] || bloodlines.not_found : bloodlines.not_found;

	return <Page />;
};

export default BloodragerBloodlinePage;
