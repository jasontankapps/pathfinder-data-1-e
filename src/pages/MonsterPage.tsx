import { useParams } from 'wouter';
import Monster1, { test as test1 } from './subpages/__monster01';
import Monster2, { test as test2 } from './subpages/__monster02';
import Monster3, { test as test3 } from './subpages/__monster03';
import Monster4, { test as test4 } from './subpages/__monster04';
import Monster5, { test as test5 } from './subpages/__monster05';
import Monster6, { test as test6 } from './subpages/__monster06';
import Monster7, { test as test7 } from './subpages/__monster07';
import Monster8, { test as test8 } from './subpages/__monster08';
import Monster9, { test as test9 } from './subpages/__monster09';
import Monster10, { test as test10 } from './subpages/__monster10';
import Monster11, { test as test11 } from './subpages/__monster11';
import Monster12, { test as test12 } from './subpages/__monster12';
import Monster13, { test as test13 } from './subpages/__monster13';
import Monster14, { test as test14 } from './subpages/__monster14';
import Monster15, { test as test15 } from './subpages/__monster15';
import Monster16, { test as test16 } from './subpages/__monster16';
import Monster17, { test as test17 } from './subpages/__monster17';
import Monster18, { test as test18 } from './subpages/__monster18';
import Monster19, { test as test19 } from './subpages/__monster19';
import Monster20, { test as test20 } from './subpages/__monster20';
import Monster21, { test as test21 } from './subpages/__monster21';
import Monster22, { test as test22 } from './subpages/__monster22';
import Monster23, { test as test23 } from './subpages/__monster23';
import Monster24, { test as test24 } from './subpages/__monster24';
import Monster25, { test as test25 } from './subpages/__monster25';
import Monster26, { test as test26 } from './subpages/__monster26';
import Monster27, { test as test27 } from './subpages/__monster27';
import Monster28, { test as test28 } from './subpages/__monster28';
import Monster29, { test as test29 } from './subpages/__monster29';
import Monster30, { test as test30 } from './subpages/__monster30';
import Monster31, { test as test31 } from './subpages/__monster31';
import Monster32, { test as test32 } from './subpages/__monster32';
import Monster33, { test as test33 } from './subpages/__monster33';
import Monster34, { test as test34 } from './subpages/__monster34';
import Monster35, { test as test35 } from './subpages/__monster35';
import Monster36, { test as test36 } from './subpages/__monster36';
import Monster37, { test as test37 } from './subpages/__monster37';
import Monster38, { test as test38 } from './subpages/__monster38';
import Monster39, { test as test39 } from './subpages/__monster39';
import Monster40, { test as test40 } from './subpages/__monster40';
import Monster41, { test as test41 } from './subpages/__monster41';
import Monster42, { test as test42 } from './subpages/__monster42';
import Monster43, { test as test43 } from './subpages/__monster43';
import Monster44, { test as test44 } from './subpages/__monster44';
import Monster45, { test as test45 } from './subpages/__monster45';
import Monster46, { test as test46 } from './subpages/__monster46';
import Monster47, { test as test47 } from './subpages/__monster47';
import Monster48, { test as test48 } from './subpages/__monster48';
import './Page.css';

type Params = { id?: string };

const MonsterPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Monster1 id={id} />;
	}
	if(test2(id)) {
		return <Monster2 id={id} />;
	}
	if(test3(id)) {
		return <Monster3 id={id} />;
	}
	if(test4(id)) {
		return <Monster4 id={id} />;
	}
	if(test5(id)) {
		return <Monster5 id={id} />;
	}
	if(test6(id)) {
		return <Monster6 id={id} />;
	}
	if(test7(id)) {
		return <Monster7 id={id} />;
	}
	if(test8(id)) {
		return <Monster8 id={id} />;
	}
	if(test9(id)) {
		return <Monster9 id={id} />;
	}
	if(test10(id)) {
		return <Monster10 id={id} />;
	}
	if(test11(id)) {
		return <Monster11 id={id} />;
	}
	if(test12(id)) {
		return <Monster12 id={id} />;
	}
	if(test13(id)) {
		return <Monster13 id={id} />;
	}
	if(test14(id)) {
		return <Monster14 id={id} />;
	}
	if(test15(id)) {
		return <Monster15 id={id} />;
	}
	if(test16(id)) {
		return <Monster16 id={id} />;
	}
	if(test17(id)) {
		return <Monster17 id={id} />;
	}
	if(test18(id)) {
		return <Monster18 id={id} />;
	}
	if(test19(id)) {
		return <Monster19 id={id} />;
	}
	if(test20(id)) {
		return <Monster20 id={id} />;
	}
	if(test21(id)) {
		return <Monster21 id={id} />;
	}
	if(test22(id)) {
		return <Monster22 id={id} />;
	}
	if(test23(id)) {
		return <Monster23 id={id} />;
	}
	if(test24(id)) {
		return <Monster24 id={id} />;
	}
	if(test25(id)) {
		return <Monster25 id={id} />;
	}
	if(test26(id)) {
		return <Monster26 id={id} />;
	}
	if(test27(id)) {
		return <Monster27 id={id} />;
	}
	if(test28(id)) {
		return <Monster28 id={id} />;
	}
	if(test29(id)) {
		return <Monster29 id={id} />;
	}
	if(test30(id)) {
		return <Monster30 id={id} />;
	}
	if(test31(id)) {
		return <Monster31 id={id} />;
	}
	if(test32(id)) {
		return <Monster32 id={id} />;
	}
	if(test33(id)) {
		return <Monster33 id={id} />;
	}
	if(test34(id)) {
		return <Monster34 id={id} />;
	}
	if(test35(id)) {
		return <Monster35 id={id} />;
	}
	if(test36(id)) {
		return <Monster36 id={id} />;
	}
	if(test37(id)) {
		return <Monster37 id={id} />;
	}
	if(test38(id)) {
		return <Monster38 id={id} />;
	}
	if(test39(id)) {
		return <Monster39 id={id} />;
	}
	if(test40(id)) {
		return <Monster40 id={id} />;
	}
	if(test41(id)) {
		return <Monster41 id={id} />;
	}
	if(test42(id)) {
		return <Monster42 id={id} />;
	}
	if(test43(id)) {
		return <Monster43 id={id} />;
	}
	if(test44(id)) {
		return <Monster44 id={id} />;
	}
	if(test45(id)) {
		return <Monster45 id={id} />;
	}

	return <Monster1 id="not_found" />;

};

export default MonsterPage;
