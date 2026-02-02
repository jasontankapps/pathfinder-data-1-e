import { useParams } from 'wouter';
import Hex, { test as test1 } from './subpages/__hex';
import Patron, { test as test2 } from './subpages/__patron';
import Shamanhex, { test as test3 } from './subpages/__shamanhex';
import Evolution, { test as test4 } from './subpages/__evolution';
import Unchevolution, { test as test5 } from './subpages/__unchevolution';
import Eidolon, { test as test6 } from './subpages/__eidolon';
import ErrorPage from './ErrorPage';
import './Page.css';

type Talent = "hex" | "patron" | "shamanhex" | "evolution" | "unchevolution" | "eidolon";

type Params = { id?: string };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id = "not_found" } = useParams<Params>();

	switch(prefix) {
		case "hex": {
			return <Hex id={test1(id) ? id : "not_found"} />;
		}
		case "patron": {
			return <Patron id={test2(id) ? id : "not_found"} />;
		}
		case "shamanhex": {
			return <Shamanhex id={test3(id) ? id : "not_found"} />;
		}
		case "evolution": {
			return <Evolution id={test4(id) ? id : "not_found"} />;
		}
		case "unchevolution": {
			return <Unchevolution id={test5(id) ? id : "not_found"} />;
		}
		case "eidolon": {
			return <Eidolon id={test6(id) ? id : "not_found"} />;
		}
	}

	return <ErrorPage />;
};

export default TalentPage;
