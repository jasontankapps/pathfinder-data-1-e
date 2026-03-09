import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import equipment from './subpages/_GEN_eq-armor';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Armor", "main/equipment_armor"];

const EquipmentArmorPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/eq-armor/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default EquipmentArmorPage;
