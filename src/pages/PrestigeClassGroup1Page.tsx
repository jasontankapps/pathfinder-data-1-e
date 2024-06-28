import { SourceProp } from '../components/SourcesModal';
import DisplayItem from '../components/DisplayItem';
import prestige_classes from '../json/prestige_classes.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Classes", "classes"]];

type Data = typeof prestige_classes;

interface JsonDataPropsClass {
	name: string,
	description: string[],
	sources: SourceProp[]
}

const PrestigeClassGroup1Page: React.FC<{id: string}> = ({id}) => {

	const {
		name: title,
		description: markdown,
		sources
	} = (prestige_classes[(id as keyof Data) || "not_found"] as JsonDataPropsClass);

	return (
		<BasicPage title={title} {...{hierarchy, sources}}>
			<DisplayItem markdown={markdown} />
		</BasicPage>
	);
};

export default PrestigeClassGroup1Page;
