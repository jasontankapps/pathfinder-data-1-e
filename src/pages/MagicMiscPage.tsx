import { useLocation, useParams } from 'wouter';
import getItem from '../components/getItem';
import construct_mods from './subpages/__constructmod';
import magic_altar from './subpages/__magic-altar';
import magic_demonic_implants from './subpages/__magic-implant';
import magic_devil_talismans from './subpages/__magic-talisman';
import magic_elemental_augmentations from './subpages/__magic-augmentation';
import magic_favor from './subpages/__magic-favor';
import magic_fleshcrafting from './subpages/__magic-fleshcrafting';
import magic_fungal_grafts from './subpages/__magic-graft';
import magic_infused_poisons from './subpages/__magic-poison';
import magic_juju_fetishes from './subpages/__magic-fetish';
import magic_necrografts from './subpages/__magic-necrograft';
import magic_necrotoxins from './subpages/__magic-necrotoxin';
import magic_plant from './subpages/__magic-plant';
import magic_relics from './subpages/__magic-relic';
import magic_set from './subpages/__magic-set';
import magic_shadow_piercings from './subpages/__magic-piercing';
import magic_tattoo from './subpages/__magic-tattoo';
import magic_throne from './subpages/__magic-throne';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
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
type Data = typeof magic;

type Params = { id?: keyof Data };

const misc: Hierarchy = ["Miscellaneous Magic Items", "main/magic_misc"];

const MagicMiscPage: React.FC = () => {

	const { id } = useParams<Params>();

	const [ path ] = useLocation();

	const m = path.match(/^([/]magic-[a-z]+[/])/);

	const { hasJL, title, jsx, sources } = getItem<Data>(id, magic);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		sources={sources}
		pageId={(m ? m[1] : "/magic-misc/") + id}
		topLink={misc}
	>{jsx}</BasicPage>;
};

export default MagicMiscPage;
