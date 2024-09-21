import { SourceProp } from '../components/SourcesModal';
import DisplayItem from '../components/DisplayItem';
import races from '../json/races2.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Races", "main/races"]];

type Data = typeof races;

interface JsonDataPropsClass {
	name: string,
	description: string[]
	sources: SourceProp[]
}

interface RaceProps {
	id: string,
};

const RaceGroup2Page: React.FC<RaceProps> = ({id}) => {

	const {
		name: title,
		description: markdown,
		sources
	} = (races[(id as keyof Data)] as JsonDataPropsClass);

	return (
		<BasicPage pageId={"race/" + id} title={title} hierarchy={hierarchy} sources={sources}>
			<DisplayItem markdown={markdown} />
		</BasicPage>
	);
};

export default RaceGroup2Page;
