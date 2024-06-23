import { useParams } from 'react-router';
import DisplayItem from '../components/DisplayItem';
import { SourceProp } from '../components/SourcesModal';
import classy from '../json/classes.json';
import npcclasses from '../json/npc_classes.json';
import prestige from '../json/prestige_classes.json';
import sidekicks from '../json/sidekicks.json';
import BasicPage from './BasicPage';
import { HierarchyArray, Table } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Classes", "classes"]];

const classes = {...classy, ...npcclasses, ...prestige, ...sidekicks};

type Data = typeof classes;

type Params = { id?: keyof Data };

interface JsonDataPropsClass {
	name: string,
	description: string[],
	tables?: Table[],
	sources: SourceProp[]
	alternate_capstones?: string[]
	favored_class_bonuses?: string[]
	archetypes?: string[]
}

interface Props {
	subtopic: "capstones" | "bonuses" | "archetypes"
}

const ClassExtraPage: React.FC<Props> = ({subtopic}) => {

	const { id } = useParams<Params>();

	const solidId = (id || "unknown") as keyof Data;

	const {
		name: title,
		tables,
		sources,
		alternate_capstones,
		favored_class_bonuses,
		archetypes
	} = (classes[solidId] as JsonDataPropsClass);

	const classLinkback = "/" + (classy[solidId as keyof typeof classy]
		? "class"
		: (npcclasses[solidId as keyof typeof npcclasses]
			? "npcclass"
			: (prestige[solidId as keyof typeof prestige] ? "prestigeclass" : "sidekick")
		)
	) + "/" + id;

	const output = [];

	switch(subtopic) {
		case "capstones":
			alternate_capstones
			&& output.push(
				<DisplayItem
					markdown={["## Alternate Capstones", "", ...alternate_capstones]}
					key={`${id}/alternateCapstones`}
				/>
			);
			break;
		case "bonuses":
			favored_class_bonuses
			&& output.push(
				<DisplayItem
					markdown={["## Favored Class Bonuses", "", ...favored_class_bonuses]}
					key={`${id}/favoredClassBonuses`}
				/>
			);
			break;
		case "archetypes":
			archetypes
			&& output.push(
				<DisplayItem
					markdown={["## Archetypes", "", ...archetypes]}
					tables={tables}
					key={`${id}/archetypes`}
				/>
			);
	}

	return (
		<BasicPage title={title} {...{hierarchy: [...hierarchy, [title, classLinkback]], sources}}>
			{output}
		</BasicPage>
	);
};

export default ClassExtraPage;
