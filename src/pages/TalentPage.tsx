import { useParams } from 'wouter';
import Talent, { test as test1 } from './subpages/__talent';
import Slayertalent, { test as test2 } from './subpages/__slayertalent';
import Phrenicamp, { test as test3 } from './subpages/__phrenicamp';
import Deed, { test as test4 } from './subpages/__deed';
import Swashdeed, { test as test5 } from './subpages/__swashdeed';
import Hkdiscipline, { test as test6 } from './subpages/__hkdiscipline';
import Rangertrap, { test as test7 } from './subpages/__rangertrap';
import ErrorPage from './ErrorPage';
import './Page.css';

type Talent = "talent" | "slayertalent" | "phrenicamp" | "deed" | "swashdeed" | "hkdiscipline" | "rangertrap";

type Params = { id?: string };

const TalentPage: React.FC<{ prefix: Talent }> = ({prefix}) => {

	const { id = "not_found" } = useParams<Params>();

	switch(prefix) {
		case "talent": {
			return <Talent id={test1(id) ? id : "not_found"} />;
		}
		case "slayertalent": {
			return <Slayertalent id={test2(id) ? id : "not_found"} />;
		}
		case "phrenicamp": {
			return <Phrenicamp id={test3(id) ? id : "not_found"} />;
		}
		case "deed": {
			return <Deed id={test4(id) ? id : "not_found"} />;
		}
		case "swashdeed": {
			return <Swashdeed id={test5(id) ? id : "not_found"} />;
		}
		case "hkdiscipline": {
			return <Hkdiscipline id={test6(id) ? id : "not_found"} />;
		}
		case "rangertrap": {
			return <Rangertrap id={test7(id) ? id : "not_found"} />;
		}
	}

	return <ErrorPage />;
};

export default TalentPage;
