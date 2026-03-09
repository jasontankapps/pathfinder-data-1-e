import { useParams } from 'wouter';
import getItem from '../components/getItem';
import talents from './subpages/_GEN_kinetic';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof talents;

type Params = { id?: keyof Data };

const KineticPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, topLink, notBookmarkable } = getItem<Data>(id, talents);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/kinetic/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default KineticPage;
