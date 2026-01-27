import { useParams } from 'wouter';
import { Hierarchy } from '../types';
import bloodlines from './subpages/__sorcbloodline';
import './Page.css';

type Data = typeof bloodlines;

type Params = { id?: keyof Data };

const SorcererBloodlinePage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id ? bloodlines[id] || bloodlines.not_found : bloodlines.not_found;

	return <Page />;
};

export default SorcererBloodlinePage;
