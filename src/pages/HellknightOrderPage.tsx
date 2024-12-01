import { useParams } from 'react-router';
import getItem from '../components/getItem';
import orders from './subpages/__order';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["Classes", "main/classes"],
	["Hellknight", "prestigeclass/hellknight"],
	["Hellknight Orders", "ability/hellknight_orders"]
];

type Data = typeof orders;

type Params = { id?: keyof Data };

const HellknightOrderPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, orders);

	return <BasicPage
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={"hellknight-order--" + id}
		topLink={["Hellknight Orders", "ability/hellknight_orders"]}
	>{jsx}</BasicPage>;
};

export default HellknightOrderPage;
