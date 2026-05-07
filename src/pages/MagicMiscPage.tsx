import { useLocation, useParams } from 'wouter';
import getItem from '../components/getItem';
import construct_mods from './subpages/_GEN_constructmod';
import magic_altar from './subpages/_GEN_magic-altar';
import magic_demonic_implants from './subpages/_GEN_magic-implant';
import magic_devil_talismans from './subpages/_GEN_magic-talisman';
import magic_elemental_augmentations from './subpages/_GEN_magic-aug';
import magic_favor from './subpages/_GEN_magic-favor';
import magic_fleshcrafting from './subpages/_GEN_magic-fleshcraft';
import magic_fungal_grafts from './subpages/_GEN_magic-graft';
import magic_infused_poisons from './subpages/_GEN_magic-poison';
import magic_juju_fetishes from './subpages/_GEN_magic-fetish';
import magic_legacy from './subpages/_GEN_magic-legacy';
import magic_necrografts from './subpages/_GEN_magic-necrograft';
import magic_necrotoxins from './subpages/_GEN_magic-necrotoxin';
import magic_plant from './subpages/_GEN_magic-plant';
import magic_relics from './subpages/_GEN_magic-relic';
import magic_set from './subpages/_GEN_magic-set';
import magic_shadow_piercings from './subpages/_GEN_magic-piercing';
import magic_tattoo from './subpages/_GEN_magic-tattoo';
import magic_throne from './subpages/_GEN_magic-throne';
import BasicPage from './BasicPage';
import { Hierarchy } from '../types';
import './css/Page.css';

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
	...magic_legacy,
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

	const { hasJL, title, jsx, notBookmarkable } = getItem<Data>(id, magic);

	return <BasicPage
		hasJL={hasJL}
		title={title}
		pageId={(m ? m[1] : "/magic-misc/") + id}
		topLink={misc}
		notBookmarkable={notBookmarkable}
	>{jsx}</BasicPage>;
};

export default MagicMiscPage;
