import { useParams } from 'wouter';
import Magicwondrous1, { test as test1 } from './subpages/__magic-wondrous01';
import Magicwondrous2, { test as test2 } from './subpages/__magic-wondrous02';
import Magicwondrous3, { test as test3 } from './subpages/__magic-wondrous03';
import Magicwondrous4, { test as test4 } from './subpages/__magic-wondrous04';
import Magicwondrous5, { test as test5 } from './subpages/__magic-wondrous05';
import Magicwondrous6, { test as test6 } from './subpages/__magic-wondrous06';
import Magicwondrous7, { test as test7 } from './subpages/__magic-wondrous07';
import Magicwondrous8, { test as test8 } from './subpages/__magic-wondrous08';
import Magicwondrous9, { test as test9 } from './subpages/__magic-wondrous09';
import Magicwondrous10, { test as test10 } from './subpages/__magic-wondrous10';
import Magicwondrous11, { test as test11 } from './subpages/__magic-wondrous11';
import './Page.css';

type Params = { id?: string };

const MagicWondrousPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Magicwondrous1 id={id} />;
	}
	if(test2(id)) {
		return <Magicwondrous2 id={id} />;
	}
	if(test3(id)) {
		return <Magicwondrous3 id={id} />;
	}
	if(test4(id)) {
		return <Magicwondrous4 id={id} />;
	}
	if(test5(id)) {
		return <Magicwondrous5 id={id} />;
	}
	if(test6(id)) {
		return <Magicwondrous6 id={id} />;
	}
	if(test7(id)) {
		return <Magicwondrous7 id={id} />;
	}
	if(test8(id)) {
		return <Magicwondrous8 id={id} />;
	}
	if(test9(id)) {
		return <Magicwondrous9 id={id} />;
	}
	if(test10(id)) {
		return <Magicwondrous10 id={id} />;
	}
	if(test11(id)) {
		return <Magicwondrous11 id={id} />;
	}

	return <Magicwondrous1 id="not_found" />;

};

export default MagicWondrousPage;
