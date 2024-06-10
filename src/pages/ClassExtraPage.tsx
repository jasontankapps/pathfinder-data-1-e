import { useParams } from 'react-router';
import DisplayItem from '../components/DisplayItem';
import classes from '../json/classes.json';
import BasicPage from './BasicPage';
import { HierarchyArray, Table } from '../types';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Classes", "classes"]];

type Data = typeof classes;

type Params = { id?: keyof Data };

interface JsonDataPropsClass {
	name: string,
	description: string[],
	tables?: Table[],
	sources: string[]
	alternate_capstones?: string[]
	favored_class_bonuses?: string[]
	archetypes?: string[]
}

interface Props {
	subtopic: "capstones" | "bonuses" | "archetypes"
}

const ClassExtraPage: React.FC<Props> = ({subtopic}) => {

	const { id } = useParams<Params>();

	const {
		name: title,
		tables,
		sources,
		alternate_capstones,
		favored_class_bonuses,
		archetypes
	} = (classes[id || "unknown"] as JsonDataPropsClass);

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
		<BasicPage title={title} {...{hierarchy: [...hierarchy, [title, "/class/" + id]], sources}}>
			{output}
		</BasicPage>
	);
};

export default ClassExtraPage;
