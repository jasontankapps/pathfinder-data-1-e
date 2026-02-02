import { useParams } from 'wouter';
import Trick, { test as test1 } from './subpages/__trick';
import Stare, { test as test2 } from './subpages/__stare';
import Discovery, { test as test3 } from './subpages/__discovery';
import Arcanedisc, { test as test4 } from './subpages/__arcanedisc';
import Mercy, { test as test5 } from './subpages/__mercy';
import Performance, { test as test6 } from './subpages/__performance';
import ErrorPage from './ErrorPage';
import './Page.css';

type Talent = "trick" | "stare" | "discovery" | "arcanedisc" | "mercy" | "performance";

type Params = { id?: string };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id = "not_found" } = useParams<Params>();

	switch(prefix) {
		case "trick": {
			return <Trick id={test1(id) ? id : "not_found"} />;
		}
		case "stare": {
			return <Stare id={test2(id) ? id : "not_found"} />;
		}
		case "discovery": {
			return <Discovery id={test3(id) ? id : "not_found"} />;
		}
		case "arcanedisc": {
			return <Arcanedisc id={test4(id) ? id : "not_found"} />;
		}
		case "mercy": {
			return <Mercy id={test5(id) ? id : "not_found"} />;
		}
		case "performance": {
			return <Performance id={test6(id) ? id : "not_found"} />;
		}
	}

	return <ErrorPage />;
};

export default TalentPage;
