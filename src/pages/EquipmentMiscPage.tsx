import { useParams } from 'wouter';
import Eqmisc1, { test as test1 } from './subpages/__eq-misc01';
import Eqmisc2, { test as test2 } from './subpages/__eq-misc02';
import Eqmisc3, { test as test3 } from './subpages/__eq-misc03';
import Eqmisc4, { test as test4 } from './subpages/__eq-misc04';
import './Page.css';

type Params = { id?: string };

const EquipmentMiscPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Eqmisc1 id={id} />;
	}
	if(test2(id)) {
		return <Eqmisc2 id={id} />;
	}
	if(test3(id)) {
		return <Eqmisc3 id={id} />;
	}
	if(test4(id)) {
		return <Eqmisc4 id={id} />;
	}

	return <Eqmisc1 id="not_found" />;

};

export default EquipmentMiscPage;
