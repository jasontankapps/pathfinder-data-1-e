import { useParams, useLocation } from 'wouter';
import getItem from '../components/getItem';
import base_spirits from './subpages/__spirit';
import legendary_spirits from './subpages/__legendaryspirit';
import outsider_spirits from './subpages/__outsiderspirit';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './Page.css';

const top1: Hierarchy = ["Medium Spirits", "ability/spirits"];
const top2: Hierarchy = ["Outer Channeler Archetype", "arc-medium/outer_channeler"];

const spirits = {...base_spirits, ...legendary_spirits, ...outsider_spirits};

type Data = typeof base_spirits;

type Params = { id?: keyof Data };

const MediumSpiritPage: React.FC = () => {
	const [ path ] = useLocation();
	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources } = getItem<Data>(id, spirits);

	const m = path.match(/^[/](outsider)?((?<=[/])legendary)?spirit[/]/);

	const pageId = ((m && m[0]) || "/spirit/") + id;

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={pageId}
		topLink={m ? top1 : top2}
	>{jsx}</BasicPage>;
};

export default MediumSpiritPage;
