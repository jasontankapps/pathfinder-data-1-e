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

interface RaceProps {
	id: string,
};

const RaceGroup1Page: React.FC<RaceProps> = ({id}) => {

	const {
		name: title,
		description: markdown,
		sources
	} = (races[(id as keyof Data) || "not_found"] as JsonDataPropsClass);

	const pageId = "race--" + id;

	return (
		<BasicPage pageId={pageId} title={title} hierarchy={hierarchy} sources={sources}>
			<DisplayItem markdown={markdown} prefix={pageId} />
		</BasicPage>
	);
};

export default RaceGroup1Page;
