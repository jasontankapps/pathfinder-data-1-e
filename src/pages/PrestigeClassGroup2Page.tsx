import { SourceProp } from '../components/SourcesModal';
import DisplayItem from '../components/DisplayItem';
import prestige_classes from '../json/prestige_classes2.json';
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

const PrestigeClassGroup2Page: React.FC<{id: string}> = ({id}) => {

	const {
		name: title,
		description: markdown,
		sources
	} = (prestige_classes[(id as keyof Data)] as JsonDataPropsClass);

	return (
		<BasicPage title={title} hierarchy={hierarchy} sources={sources}>
			<DisplayItem markdown={markdown} />
		</BasicPage>
	);
};

export default PrestigeClassGroup2Page;
