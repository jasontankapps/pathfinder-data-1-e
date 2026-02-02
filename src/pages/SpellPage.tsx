import { useParams } from 'wouter';
import Spell1, { test as test1 } from './subpages/__spell01';
import Spell2, { test as test2 } from './subpages/__spell02';
import Spell3, { test as test3 } from './subpages/__spell03';
import Spell4, { test as test4 } from './subpages/__spell04';
import Spell5, { test as test5 } from './subpages/__spell05';
import Spell6, { test as test6 } from './subpages/__spell06';
import Spell7, { test as test7 } from './subpages/__spell07';
import Spell8, { test as test8 } from './subpages/__spell08';
import Spell9, { test as test9 } from './subpages/__spell09';
import Spell10, { test as test10 } from './subpages/__spell10';
import Spell11, { test as test11 } from './subpages/__spell11';
import Spell12, { test as test12 } from './subpages/__spell12';
import Spell13, { test as test13 } from './subpages/__spell13';
import Spell14, { test as test14 } from './subpages/__spell14';
import Spell15, { test as test15 } from './subpages/__spell15';
import Spell16, { test as test16 } from './subpages/__spell16';
import Spell17, { test as test17 } from './subpages/__spell17';
import './Page.css';

type Params = { id?: string };

const SpellPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Spell1 id={id} />;
	}
	if(test2(id)) {
		return <Spell2 id={id} />;
	}
	if(test3(id)) {
		return <Spell3 id={id} />;
	}
	if(test4(id)) {
		return <Spell4 id={id} />;
	}
	if(test5(id)) {
		return <Spell5 id={id} />;
	}
	if(test6(id)) {
		return <Spell6 id={id} />;
	}
	if(test7(id)) {
		return <Spell7 id={id} />;
	}
	if(test8(id)) {
		return <Spell8 id={id} />;
	}
	if(test9(id)) {
		return <Spell9 id={id} />;
	}
	if(test10(id)) {
		return <Spell10 id={id} />;
	}
	if(test11(id)) {
		return <Spell11 id={id} />;
	}
	if(test12(id)) {
		return <Spell12 id={id} />;
	}
	if(test13(id)) {
		return <Spell13 id={id} />;
	}
	if(test14(id)) {
		return <Spell14 id={id} />;
	}
	if(test15(id)) {
		return <Spell15 id={id} />;
	}
	if(test16(id)) {
		return <Spell16 id={id} />;
	}
	if(test17(id)) {
		return <Spell17 id={id} />;
	}

	return <Spell1 id="not_found" />;


};

export default SpellPage;
