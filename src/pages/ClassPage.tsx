import { useParams } from 'wouter';
import class1 from './subpages/__class01';
import class2 from './subpages/__class02';
import class3 from './subpages/__class03';
import class4 from './subpages/__class04';
import class5 from './subpages/__class05';
import class6 from './subpages/__class06';
import class7 from './subpages/__class07';
import class8 from './subpages/__class08';
import './Page.css';

type Params = { id?: string };

const ClassPage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	const Page = class1[id] || class2[id] || class3[id] || class4[id]
		|| class5[id] || class6[id] || class7[id] || class8[id]
		|| class1.not_found;

	return <Page />;

};

export default ClassPage;
