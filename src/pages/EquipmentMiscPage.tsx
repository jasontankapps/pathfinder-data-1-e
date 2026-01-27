import { useParams } from 'wouter';
import eqmisc1 from './subpages/__eq-misc01';
import eqmisc2 from './subpages/__eq-misc02';
import eqmisc3 from './subpages/__eq-misc03';
import eqmisc4 from './subpages/__eq-misc04';
import './Page.css';

type Data = typeof eqmisc1 | typeof eqmisc2 | typeof eqmisc3 | typeof eqmisc4;

type Params = { id?: keyof Data };

const EquipmentMiscPage: React.FC = () => {

	const { id } = useParams<Params>();

	const Page = id && (
		eqmisc1[id] || eqmisc2[id] || eqmisc3[id] || eqmisc4[id]
	) || eqmisc1.not_found;

	return <Page />;

};

export default EquipmentMiscPage;
