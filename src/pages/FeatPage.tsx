import { useParams } from 'wouter';
import Feat1, { test as test1 } from './subpages/__feat01';
import Feat2, { test as test2 } from './subpages/__feat02';
import Feat3, { test as test3 } from './subpages/__feat03';
import Feat4, { test as test4 } from './subpages/__feat04';
import Feat5, { test as test5 } from './subpages/__feat05';
import Feat6, { test as test6 } from './subpages/__feat06';
import Feat7, { test as test7 } from './subpages/__feat07';
import Feat8, { test as test8 } from './subpages/__feat08';
import Feat9, { test as test9 } from './subpages/__feat09';
import Feat10, { test as test10 } from './subpages/__feat10';
import Feat11, { test as test11 } from './subpages/__feat11';
import Feat12, { test as test12 } from './subpages/__feat12';
import Feat13, { test as test13 } from './subpages/__feat13';
import Feat14, { test as test14 } from './subpages/__feat14';
import Feat15, { test as test15 } from './subpages/__feat15';
import Feat16, { test as test16 } from './subpages/__feat16';
import Feat17, { test as test17 } from './subpages/__feat17';
import './Page.css';

type Params = { id?: string };


const FeatPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Feat1 id={id} />;
	}
	if(test2(id)) {
		return <Feat2 id={id} />;
	}
	if(test3(id)) {
		return <Feat3 id={id} />;
	}
	if(test4(id)) {
		return <Feat4 id={id} />;
	}
	if(test5(id)) {
		return <Feat5 id={id} />;
	}
	if(test6(id)) {
		return <Feat6 id={id} />;
	}
	if(test7(id)) {
		return <Feat7 id={id} />;
	}
	if(test8(id)) {
		return <Feat8 id={id} />;
	}
	if(test9(id)) {
		return <Feat9 id={id} />;
	}
	if(test10(id)) {
		return <Feat10 id={id} />;
	}
	if(test11(id)) {
		return <Feat11 id={id} />;
	}
	if(test12(id)) {
		return <Feat12 id={id} />;
	}
	if(test13(id)) {
		return <Feat13 id={id} />;
	}
	if(test14(id)) {
		return <Feat14 id={id} />;
	}
	if(test15(id)) {
		return <Feat15 id={id} />;
	}
	if(test16(id)) {
		return <Feat16 id={id} />;
	}
	if(test17(id)) {
		return <Feat17 id={id} />;
	}

	return <Feat1 id="not_found" />;

};

export default FeatPage;
