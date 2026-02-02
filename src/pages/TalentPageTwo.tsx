import { useParams } from 'wouter';
import Invtalent, { test as test1 } from './subpages/__invtalent';
import Soctalent, { test as test2 } from './subpages/__soctalent';
import Vigtalent, { test as test3 } from './subpages/__vigtalent';
import Ninjatrick, { test as test4 } from './subpages/__ninjatrick';
import Kipower, { test as test5 } from './subpages/__kipower';
import Stylestrike, { test as test6 } from './subpages/__stylestrike';
import ErrorPage from './ErrorPage';
import './Page.css';

type Talent = "invtalent" | "soctalent" | "vigtalent" | "ninjatrick" | "kipower" | "stylestrike";

type Params = { id?: string };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id = "not_found" } = useParams<Params>();

	switch(prefix) {
		case "invtalent": {
			return <Invtalent id={test1(id) ? id : "not_found"} />;
		}
		case "soctalent": {
			return <Soctalent id={test2(id) ? id : "not_found"} />;
		}
		case "vigtalent": {
			return <Vigtalent id={test3(id) ? id : "not_found"} />;
		}
		case "ninjatrick": {
			return <Ninjatrick id={test4(id) ? id : "not_found"} />;
		}
		case "kipower": {
			return <Kipower id={test5(id) ? id : "not_found"} />;
		}
		case "stylestrike": {
			return <Stylestrike id={test6(id) ? id : "not_found"} />;
		}
	}

	return <ErrorPage />;
};

export default TalentPage;
