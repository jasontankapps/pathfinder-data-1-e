import { SourceProp } from '../components/SourcesModal';
import DisplayItem from '../components/DisplayItem';
import prestige_classes from '../json/prestige_classes3.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

type Data = typeof prestige_classes;

interface JsonDataPropsClass {
	name: string,
	description: string[]
	sources: SourceProp[]
}

interface ClassProps {
	id: string,
};

const PrestigeClassGroup3Page: React.FC<ClassProps> = ({id}) => {

	const {
		name: title,
		description: markdown,
		sources
	} = (prestige_classes[(id as keyof Data)] as JsonDataPropsClass);

	const pageId = "prestigeclass--" + id;

	return (
		<BasicPage pageId={pageId} title={title} hierarchy={hierarchy} sources={sources}>
			<DisplayItem markdown={markdown} prefix={pageId} />
		</BasicPage>
	);
};

export default PrestigeClassGroup3Page;
