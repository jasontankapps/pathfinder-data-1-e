import { SourceProp } from '../components/SourcesModal';
import DisplayItem from '../components/DisplayItem';
import races from '../json/races.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Races", "main/races"]];

type Data = typeof races;

interface JsonDataPropsClass {
	name: string,
	description: string[],
	sources: SourceProp[]
}

const RaceGroup1Page: React.FC<{id: string}> = ({id}) => {

	const {
		name: title,
		description: markdown,
		sources
	} = (races[(id as keyof Data) || "not_found"] as JsonDataPropsClass);

	return (
		<BasicPage title={title} {...{hierarchy, sources}}>
			<DisplayItem markdown={markdown} />
		</BasicPage>
	);
};

export default RaceGroup1Page;
