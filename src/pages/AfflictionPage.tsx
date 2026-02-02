import { useLocation, useParams } from 'wouter';
import Curse, { test as ctest } from './subpages/__curse';
import Disease, { test as dtest } from './subpages/__disease';
import Infestation, { test as itest } from './subpages/__infestation';
import './Page.css';

type Affliction = "curse" | "disease" | "infestation";

type Params = { id?: string };

const AfflictionPage: React.FC = () => {

	const [ path ] = useLocation();
	const { id = "not_found" } = useParams<Params>();

	const m = path.match(/^[/](curse|disease|infestation)[/]/);

	const type: Affliction = m ? m[1] as Affliction : "curse";

	switch(type) {
		"curse": {
			return <Curse id={ctest(id) ? id : "not_found"} />;
		}
		"disease": {
			return <Disease id={dtest(id) ? id : "not_found"} />;
		}
	}
	return <Infestation id={itest(id) ? id : "not_found"} />;
};

export default AfflictionPage;
