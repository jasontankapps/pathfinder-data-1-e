import { Link } from 'react-router-dom';
import DisplayItem from '../components/DisplayItem';
import { SourceProp } from '../components/SourcesModal';
import classes from '../json/classes3.json';
import { HierarchyArray, Table } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [["Main", "main"], ["Classes", "classes"]];

type Data = typeof classes;

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
	id: string
	subtopic?: "capstones" | "bonuses" | "archetypes"
}

const ClassGroup3Page: React.FC<Props> = ({id, subtopic}) => {

	const {
		name: title,
		description: markdown,
		sources,
		tables,
		alternate_capstones,
		favored_class_bonuses,
		archetypes
	} = (classes[id as keyof Data] as JsonDataPropsClass);

	const output = [];
	const extraHierarchy: HierarchyArray = [];
	(alternate_capstones || favored_class_bonuses || archetypes) && extraHierarchy.push([title, "/class/" + id]);

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
			break;
		default:
			output.push(<DisplayItem markdown={markdown} key={`${id}/main`} />);
			(alternate_capstones || favored_class_bonuses || archetypes) && output.push(
				<div className="subtopics" key={`${id}/subtopics`}>
					<header>Subtopics:</header>
					<ul>
						{alternate_capstones ? <li><Link to={`/classcapstone/${id}`}>Alternate Capstones</Link></li> : <></>}
						{favored_class_bonuses ? <li><Link to={`/classfavored/${id}`}>Favored Class Bonuses</Link></li> : <></>}
						{archetypes ? <li><Link to={`/classarchetypes/${id}`}>Archetypes</Link></li> : <></>}
					</ul>
				</div>
			);
	}

	return (
		<BasicPage title={title} {...{hierarchy: [...hierarchy, ...extraHierarchy], sources}}>{output}</BasicPage>
	);
};

export default ClassGroup3Page;
