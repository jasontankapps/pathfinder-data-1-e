import { useParams } from 'wouter';
import Template1, { test as test1 } from './subpages/__template01';
import Template2, { test as test2 } from './subpages/__template02';
import Template3, { test as test3 } from './subpages/__template03';
import Template4, { test as test4 } from './subpages/__template04';
import './Page.css';

type Params = { id?: string };

const TemplateTemplatePage: React.FC = () => {

	const { id = "not_found" } = useParams<Params>();

	if(test1(id)) {
		return <Template1 id={id} />;
	}
	if(test2(id)) {
		return <Template2 id={id} />;
	}
	if(test3(id)) {
		return <Template3 id={id} />;
	}
	if(test4(id)) {
		return <Template4 id={id} />;
	}

	return <Template1 id="not_found" />;

};

export default TemplateTemplatePage;
