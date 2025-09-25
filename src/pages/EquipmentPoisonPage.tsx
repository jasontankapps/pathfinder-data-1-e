import { useParams } from 'wouter';
import getItem from '../components/getItem';
import { Hierarchy } from '../types';
import equipment from './subpages/__eq-poison';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof equipment;

type Params = { id?: keyof Data };

const topLink: Hierarchy = ["Poisons", "main/equipment_poisons"];

const EquipmentPoisonPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, equipment);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={"/eq-poison/" + id}
		topLink={topLink}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default EquipmentPoisonPage;
