import { useParams } from 'wouter';
import Altar, { test as test1 } from './subpages/__magic-altar';
import DemonicImplant, { test as test2 } from './subpages/__magic-implant';
import DevilTalisman, { test as test3 } from './subpages/__magic-talisman';
import ElementalAugmentation, { test as test4 } from './subpages/__magic-aug';
import Favor, { test as test5 } from './subpages/__magic-favor';
import Fleshcrafting, { test as test6 } from './subpages/__magic-fleshcraft';
import FungalGraft, { test as test7 } from './subpages/__magic-graft';
import InfusedPoison, { test as test8 } from './subpages/__magic-poison';
import JujuFetish, { test as test9 } from './subpages/__magic-fetish';
import Legacy, { test as test10 } from './subpages/__magic-legacy';
import Necrograft, { test as test11 } from './subpages/__magic-necrograft';
import Necrotoxin, { test as test12 } from './subpages/__magic-necrotoxin';
import Plant, { test as test13 } from './subpages/__magic-plant';
import Relic, { test as test14 } from './subpages/__magic-relic';
import MagicSet, { test as test15 } from './subpages/__magic-set';
import ShadowPiercing, { test as test16 } from './subpages/__magic-piercing';
import Tattoo, { test as test17 } from './subpages/__magic-tattoo';
import Throne, { test as test18 } from './subpages/__magic-throne';
import './Page.css';

type Params = { id?: string };

const MagicMiscPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Altar id={id} />;
	}
	if(test2(id)) {
		return <DemonicImplant id={id} />;
	}
	if(test3(id)) {
		return <DevilTalisman id={id} />;
	}
	if(test4(id)) {
		return <ElementalAugmentation id={id} />;
	}
	if(test5(id)) {
		return <Favor id={id} />;
	}
	if(test6(id)) {
		return <Fleshcrafting id={id} />;
	}
	if(test7(id)) {
		return <FungalGraft id={id} />;
	}
	if(test8(id)) {
		return <InfusedPoison id={id} />;
	}
	if(test9(id)) {
		return <JujuFetish id={id} />;
	}
	if(test10(id)) {
		return <Legacy id={id} />;
	}
	if(test11(id)) {
		return <Necrograft id={id} />;
	}
	if(test12(id)) {
		return <Necrotoxin id={id} />;
	}
	if(test13(id)) {
		return <Plant id={id} />;
	}
	if(test14(id)) {
		return <Relic id={id} />;
	}
	if(test15(id)) {
		return <MagicSet id={id} />;
	}
	if(test16(id)) {
		return <ShadowPiercing id={id} />;
	}
	if(test17(id)) {
		return <Tattoo id={id} />;
	}
	if(test18(id)) {
		return <Throne id={id} />;
	}

	return <Altar id="not_found" />
};

export default MagicMiscPage;
