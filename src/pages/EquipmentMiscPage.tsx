import { useParams } from 'wouter';
import eqmisc1 from './subpages/__eq-misc01';
import eqmisc2 from './subpages/__eq-misc02';
import eqmisc3 from './subpages/__eq-misc03';
import eqmisc4 from './subpages/__eq-misc04';
import './Page.css';

type Params = { id?: string };

const EquipmentMiscPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = eqmisc1[id] || eqmisc2[id] || eqmisc3[id]
		|| eqmisc4[id] || eqmisc1.not_found;

	return <Page />;

};

export default EquipmentMiscPage;
