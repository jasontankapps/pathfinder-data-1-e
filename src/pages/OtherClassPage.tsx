import { useParams } from 'react-router';
import DisplayItem from '../components/DisplayItem';
import { SourceProp } from '../components/SourcesModal';
import npcclasses from '../json/npc_classes.json';
import sidekicks from '../json/sidekicks.json';
import BasicPage from './BasicPage';
import { HierarchyArray, Table } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main/main"], ["Classes", "main/classes"]];

const classes = {...npcclasses, ...sidekicks};

type Data = typeof classes;

type Params = { id?: keyof Data };

interface JsonDataPropsClass {
	name: string,
	description: string[],
	tables?: Table[],
	sources: SourceProp[]
}

const OtherClassPage: React.FC = () => {

	const { id } = useParams<Params>();

	const solidId = (id || "not_found") as keyof Data;

	const {
		name: title,
		description: markdown,
		sources
	} = (classes[solidId] as JsonDataPropsClass);

	return (
		<BasicPage
			title={title}
			hierarchy={hierarchy}
			sources={sources}
			pageId={"otherclasses/" + id}
		>
			<DisplayItem markdown={markdown} />
		</BasicPage>
	);
};

export default OtherClassPage;
