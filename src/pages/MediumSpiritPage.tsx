import { useParams } from 'react-router';
import { useRouteMatch } from "react-router-dom";
import getItem from '../components/getItem';
import base_spirits from './subpages/__spirit';
import legendary_spirits from './subpages/__legendaryspirit';
import outsider_spirits from './subpages/__outsiderspirit';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const hierarchy1: HierarchyArray = [
	["Classes", "main/classes"],
	["Medium", "class/medium"],
	["Spirits", "ability/spirits"]
];

const hierarchy2: HierarchyArray = [
	["Classes", "main/classes"],
	["Medium", "class/medium"],
	["Outer Channeler", "arc-medium/outer_channeler"]
];

const spirits = {...base_spirits, ...legendary_spirits, ...outsider_spirits};

type Data = typeof base_spirits;

type Params = { id?: keyof Data };

const MediumSpiritPage: React.FC = () => {
	const { path } = useRouteMatch();
	const { id } = useParams<Params>();

	const { hasJL, title, jsx, sources, subhierarchy = [] } = getItem<Data>(id, spirits);

	const m = path.match(/outsiderspirit/);
	const hierarchy = m ? hierarchy2 : hierarchy1;

	const pageId = (m ? "spirit--" : "outsiderspirit--") + id;

	return <BasicPage
		hasJL={hasJL}
		title={title}
		hierarchy={[...hierarchy, ...subhierarchy]}
		sources={sources}
		pageId={pageId}
		topLink={m ? ["Medium Spirits", "ability/spirits"] : ["Outer Channeler Archetype", "arc-medium/outer_channeler"]}
	>{jsx}</BasicPage>;
};

export default MediumSpiritPage;
