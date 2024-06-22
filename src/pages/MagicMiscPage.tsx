import { useParams } from 'react-router';
import getItem from '../components/getItem';
import construct_mods from '../json/construct_mods.json';
import magic_altar from '../json/magic_altar.json';
import magic_demonic_implants from '../json/magic_demonic_implants.json';
import magic_devil_talismans from '../json/magic_devil_talismans.json';
import magic_elemental_augmentations from '../json/magic_elemental_augmentations.json';
import magic_favor from '../json/magic_favor.json';
import magic_fleshcrafting from '../json/magic_fleshcrafting.json';
import magic_fungal_grafts from '../json/magic_fungal_grafts.json';
import magic_infused_poisons from '../json/magic_infused_poisons.json';
import magic_juju_fetishes from '../json/magic_juju_fetishes.json';
import magic_necrografts from '../json/magic_necrografts.json';
import magic_necrotoxins from '../json/magic_necrotoxins.json';
import magic_plant from '../json/magic_plant.json';
import magic_relics from '../json/magic_relics.json';
import magic_set from '../json/magic_set.json';
import magic_shadow_piercings from '../json/magic_shadow_piercings.json';
import magic_tattoo from '../json/magic_tattoo.json';
import magic_throne from '../json/magic_throne.json';
import BasicPage from './BasicPage';
import { HierarchyArray } from '../types';
import './Page.css';

const magic = {
	...magic_altar,
	...magic_demonic_implants,
	...magic_devil_talismans,
	...magic_elemental_augmentations,
	...magic_favor,
	...magic_fleshcrafting,
	...magic_fungal_grafts,
	...magic_infused_poisons,
	...magic_juju_fetishes,
	...magic_necrografts,
	...magic_necrotoxins,
	...magic_plant,
	...magic_relics,
	...magic_set,
	...magic_shadow_piercings,
	...magic_tattoo,
	...magic_throne,
	...construct_mods
};
const hierarchy: HierarchyArray = [["Main", "main"], ["Magic Items", "magic"], ["Miscellaneous Magic Items", "magic_misc"]];

type Data = typeof magic;

type Params = { id?: keyof Data };

const MagicPage: React.FC = () => {

	const { id } = useParams<Params>();

	const { name: title, description: markdown, tables, sources, subhierarchy = [] } = getItem<Data>(id, magic);

	return <BasicPage title={title} displayItem={{markdown, tables}} {...{hierarchy: [...hierarchy, ...subhierarchy], sources}} />;
};

export default MagicPage;
