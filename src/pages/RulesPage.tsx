import { useParams } from 'wouter';
import Rule01, { test as test1 } from './subpages/__rule01';
import Rule02, { test as test2 } from './subpages/__rule02';
import Rule03, { test as test3 } from './subpages/__rule03';
import Rule04, { test as test4 } from './subpages/__rule04';
import Rule05, { test as test5 } from './subpages/__rule05';
import Rule06, { test as test6 } from './subpages/__rule06';
import Rule07, { test as test7 } from './subpages/__rule07';
import Rule08, { test as test8 } from './subpages/__rule08';
import Rule09, { test as test9 } from './subpages/__rule09';
import Rule10, { test as test10 } from './subpages/__rule10';
import Rule11, { test as test11 } from './subpages/__rule11';
import Rule12, { test as test12 } from './subpages/__rule12';
import Rule13, { test as test13 } from './subpages/__rule13';
import Rule14, { test as test14 } from './subpages/__rule14';
import Rule15, { test as test15 } from './subpages/__rule15';
import Rule16, { test as test16 } from './subpages/__rule16';
import Rule17, { test as test17 } from './subpages/__rule17';
import Rule18, { test as test18 } from './subpages/__rule18';
import Rule19, { test as test19 } from './subpages/__rule19';
import Rule20, { test as test20 } from './subpages/__rule20';
import Rule21, { test as test21 } from './subpages/__rule21';
import Rule22, { test as test22 } from './subpages/__rule22';
import Rule23, { test as test23 } from './subpages/__rule23';
import Rule24, { test as test24 } from './subpages/__rule24';
import Rule25, { test as test25 } from './subpages/__rule25';
import Rule26, { test as test26 } from './subpages/__rule26';
import Rule27, { test as test27 } from './subpages/__rule27';
import Rule28, { test as test28 } from './subpages/__rule28';
import Rule29, { test as test29 } from './subpages/__rule29';
import Rule30, { test as test30 } from './subpages/__rule30';
import Rule31, { test as test31 } from './subpages/__rule31';
import Rule32, { test as test32 } from './subpages/__rule32';
import Rule33, { test as test33 } from './subpages/__rule33';
import Rule34, { test as test34 } from './subpages/__rule34';
import Rule35, { test as test35 } from './subpages/__rule35';
import Rule36, { test as test36 } from './subpages/__rule36';
import Rule37, { test as test37 } from './subpages/__rule37';
import Rule38, { test as test38 } from './subpages/__rule38';
import Rule39, { test as test39 } from './subpages/__rule39';
import Rule40, { test as test40 } from './subpages/__rule40';
import Rule41, { test as test41 } from './subpages/__rule41';
import Rule42, { test as test42 } from './subpages/__rule42';
import Rule43, { test as test43 } from './subpages/__rule43';
import Rule44, { test as test44 } from './subpages/__rule44';
import Rule45, { test as test45 } from './subpages/__rule45';
import './Page.css';

type Params = { id?: string };

const RulePage: React.FC = () => {

	const { id } = useParams<Params>();

	if(test1(id)) {
		return <Rule01 id={id} />;
	}
	if(test2(id)) {
		return <Rule02 id={id} />;
	}
	if(test3(id)) {
		return <Rule03 id={id} />;
	}
	if(test4(id)) {
		return <Rule04 id={id} />;
	}
	if(test5(id)) {
		return <Rule05 id={id} />;
	}
	if(test6(id)) {
		return <Rule06 id={id} />;
	}
	if(test7(id)) {
		return <Rule07 id={id} />;
	}
	if(test8(id)) {
		return <Rule08 id={id} />;
	}
	if(test9(id)) {
		return <Rule09 id={id} />;
	}
	if(test10(id)) {
		return <Rule10 id={id} />;
	}
	if(test11(id)) {
		return <Rule11 id={id} />;
	}
	if(test12(id)) {
		return <Rule12 id={id} />;
	}
	if(test13(id)) {
		return <Rule13 id={id} />;
	}
	if(test14(id)) {
		return <Rule14 id={id} />;
	}
	if(test15(id)) {
		return <Rule15 id={id} />;
	}
	if(test16(id)) {
		return <Rule16 id={id} />;
	}
	if(test17(id)) {
		return <Rule17 id={id} />;
	}
	if(test18(id)) {
		return <Rule18 id={id} />;
	}
	if(test19(id)) {
		return <Rule19 id={id} />;
	}
	if(test20(id)) {
		return <Rule20 id={id} />;
	}
	if(test21(id)) {
		return <Rule21 id={id} />;
	}
	if(test22(id)) {
		return <Rule22 id={id} />;
	}
	if(test23(id)) {
		return <Rule23 id={id} />;
	}
	if(test24(id)) {
		return <Rule24 id={id} />;
	}
	if(test25(id)) {
		return <Rule25 id={id} />;
	}
	if(test26(id)) {
		return <Rule26 id={id} />;
	}
	if(test27(id)) {
		return <Rule27 id={id} />;
	}
	if(test28(id)) {
		return <Rule28 id={id} />;
	}
	if(test29(id)) {
		return <Rule29 id={id} />;
	}
	if(test30(id)) {
		return <Rule30 id={id} />;
	}
	if(test31(id)) {
		return <Rule31 id={id} />;
	}
	if(test32(id)) {
		return <Rule32 id={id} />;
	}
	if(test33(id)) {
		return <Rule33 id={id} />;
	}
	if(test34(id)) {
		return <Rule34 id={id} />;
	}
	if(test35(id)) {
		return <Rule35 id={id} />;
	}
	if(test36(id)) {
		return <Rule36 id={id} />;
	}
	if(test37(id)) {
		return <Rule37 id={id} />;
	}
	if(test38(id)) {
		return <Rule38 id={id} />;
	}
	if(test39(id)) {
		return <Rule39 id={id} />;
	}
	if(test40(id)) {
		return <Rule40 id={id} />;
	}
	if(test41(id)) {
		return <Rule41 id={id} />;
	}
	if(test42(id)) {
		return <Rule42 id={id} />;
	}
	if(test43(id)) {
		return <Rule43 id={id} />;
	}
	if(test44(id)) {
		return <Rule44 id={id} />;
	}
	if(test45(id)) {
		return <Rule45 id={id} />;
	}

	return <Rule01 id="not_found" />;

};

export default RulePage;
