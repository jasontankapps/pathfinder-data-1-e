import { useParams } from 'wouter';
import monster1 from './subpages/__monster01';
import monster2 from './subpages/__monster02';
import monster3 from './subpages/__monster03';
import monster4 from './subpages/__monster04';
import monster5 from './subpages/__monster05';
import monster6 from './subpages/__monster06';
import monster7 from './subpages/__monster07';
import monster8 from './subpages/__monster08';
import monster9 from './subpages/__monster09';
import monster10 from './subpages/__monster10';
import monster11 from './subpages/__monster11';
import monster12 from './subpages/__monster12';
import monster13 from './subpages/__monster13';
import monster14 from './subpages/__monster14';
import monster15 from './subpages/__monster15';
import monster16 from './subpages/__monster16';
import monster17 from './subpages/__monster17';
import monster18 from './subpages/__monster18';
import monster19 from './subpages/__monster19';
import monster20 from './subpages/__monster20';
import monster21 from './subpages/__monster21';
import monster22 from './subpages/__monster22';
import monster23 from './subpages/__monster23';
import monster24 from './subpages/__monster24';
import monster25 from './subpages/__monster25';
import monster26 from './subpages/__monster26';
import monster27 from './subpages/__monster27';
import monster28 from './subpages/__monster28';
import monster29 from './subpages/__monster29';
import monster30 from './subpages/__monster30';
import monster31 from './subpages/__monster31';
import monster32 from './subpages/__monster32';
import monster33 from './subpages/__monster33';
import monster34 from './subpages/__monster34';
import monster35 from './subpages/__monster35';
import monster36 from './subpages/__monster36';
import monster37 from './subpages/__monster37';
import monster38 from './subpages/__monster38';
import monster39 from './subpages/__monster39';
import monster40 from './subpages/__monster40';
import monster41 from './subpages/__monster41';
import monster42 from './subpages/__monster42';
import monster43 from './subpages/__monster43';
import monster44 from './subpages/__monster44';
import monster45 from './subpages/__monster45';
import monster46 from './subpages/__monster46';
import monster47 from './subpages/__monster47';
import monster48 from './subpages/__monster48';
import './Page.css';

type Data =
	typeof monster1 | typeof monster2 | typeof monster3 | typeof monster4
	| typeof monster5 | typeof monster6 | typeof monster7 | typeof monster8
	| typeof monster9 | typeof monster10 | typeof monster11 | typeof monster12
	| typeof monster13 | typeof monster14 | typeof monster15 | typeof monster16
	| typeof monster17 | typeof monster18 | typeof monster19 | typeof monster20
	| typeof monster21 | typeof monster22 | typeof monster23 | typeof monster24
	| typeof monster25 | typeof monster26 | typeof monster27 | typeof monster28
	| typeof monster29 | typeof monster30 | typeof monster31 | typeof monster32
	| typeof monster33 | typeof monster34 | typeof monster35 | typeof monster36
	| typeof monster37 | typeof monster38 | typeof monster39 | typeof monster40
	| typeof monster41 | typeof monster42 | typeof monster43 | typeof monster44
	| typeof monster45 | typeof monster46 | typeof monster47 | typeof monster48;

type Params = { id?: keyof Data };

const MonsterPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id && (
		monster1[id] || monster2[id] || monster3[id] || monster4[id]
		|| monster5[id] || monster6[id] || monster7[id] || monster8[id]
		|| monster9[id] || monster10[id] || monster11[id] || monster12[id]
		|| monster13[id] || monster14[id] || monster15[id] || monster16[id]
		|| monster17[id] || monster18[id] || monster19[id] || monster20[id]
		|| monster21[id] || monster22[id] || monster23[id] || monster24[id]
		|| monster25[id] || monster26[id] || monster27[id] || monster28[id]
		|| monster29[id] || monster30[id] || monster31[id] || monster32[id]
		|| monster33[id] || monster34[id] || monster35[id] || monster36[id]
		|| monster37[id] || monster38[id] || monster39[id] || monster40[id]
		|| monster41[id] || monster42[id] || monster43[id] || monster44[id]
		|| monster45[id] || monster46[id] || monster47[id] || monster48[id]
	) || monster1.not_found;

	return <Page />;

};

export default MonsterPage;
