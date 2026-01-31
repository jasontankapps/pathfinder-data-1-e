import { useParams } from 'wouter';
import rules01 from './subpages/__rule01';
import rules02 from './subpages/__rule02';
import rules03 from './subpages/__rule03';
import rules04 from './subpages/__rule04';
import rules05 from './subpages/__rule05';
import rules06 from './subpages/__rule06';
import rules07 from './subpages/__rule07';
import rules08 from './subpages/__rule08';
import rules09 from './subpages/__rule09';
import rules10 from './subpages/__rule10';
import rules11 from './subpages/__rule11';
import rules12 from './subpages/__rule12';
import rules13 from './subpages/__rule13';
import rules14 from './subpages/__rule14';
import rules15 from './subpages/__rule15';
import rules16 from './subpages/__rule16';
import rules17 from './subpages/__rule17';
import rules18 from './subpages/__rule18';
import rules19 from './subpages/__rule19';
import rules20 from './subpages/__rule20';
import rules21 from './subpages/__rule21';
import rules22 from './subpages/__rule22';
import rules23 from './subpages/__rule23';
import rules24 from './subpages/__rule24';
import rules25 from './subpages/__rule25';
import rules26 from './subpages/__rule26';
import rules27 from './subpages/__rule27';
import rules28 from './subpages/__rule28';
import rules29 from './subpages/__rule29';
import rules30 from './subpages/__rule30';
import rules31 from './subpages/__rule31';
import rules32 from './subpages/__rule32';
import rules33 from './subpages/__rule33';
import rules34 from './subpages/__rule34';
import rules35 from './subpages/__rule35';
import rules36 from './subpages/__rule36';
import rules37 from './subpages/__rule37';
import rules38 from './subpages/__rule38';
import rules39 from './subpages/__rule39';
import rules40 from './subpages/__rule40';
import rules41 from './subpages/__rule41';
import rules42 from './subpages/__rule42';
import rules43 from './subpages/__rule43';
import rules44 from './subpages/__rule44';
import rules45 from './subpages/__rule45';
import './Page.css';

type Params = { id?: string };

const RulesPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = rules01[id] || rules02[id] || rules03[id] || rules04[id]
		|| rules05[id] || rules06[id] || rules07[id] || rules08[id]
		|| rules09[id] || rules10[id] || rules11[id] || rules12[id]
		|| rules13[id] || rules14[id] || rules15[id] || rules16[id]
		|| rules17[id] || rules18[id] || rules19[id] || rules20[id]
		|| rules21[id] || rules22[id] || rules23[id] || rules24[id]
		|| rules25[id] || rules26[id] || rules27[id] || rules28[id]
		|| rules29[id] || rules30[id] || rules31[id] || rules32[id]
		|| rules33[id] || rules34[id] || rules35[id] || rules36[id]
		|| rules37[id] || rules38[id] || rules39[id] || rules40[id]
		|| rules41[id] || rules42[id] || rules43[id] || rules44[id]
		|| rules45[id] || rules01.not_found;

	return <Page />;

};

export default RulesPage;
