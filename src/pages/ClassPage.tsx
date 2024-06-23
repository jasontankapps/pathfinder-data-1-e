import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
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

const ClassPage: React.FC = () => {

	const { id } = useParams<Params>();

	const {
		name: title,
		description: markdown,
		sources,
		alternate_capstones,
		favored_class_bonuses,
		archetypes
	} = (classes[id || "unknown"] as JsonDataPropsClass);

	return (
		<BasicPage title={title} {...{hierarchy, sources}}>
			<DisplayItem markdown={markdown} />
			{(alternate_capstones || favored_class_bonuses || archetypes) ? (
				<div className="subtopics">
					<header>Subtopics:</header>
					<ul>
						{alternate_capstones ? <li><Link to={`/classcapstone/${id}`}>Alternate Capstones</Link></li> : <></>}
						{favored_class_bonuses ? <li><Link to={`/classfavored/${id}`}>Favored Class Bonuses</Link></li> : <></>}
						{archetypes ? <li><Link to={`/classarchetypes/${id}`}>Archetypes</Link></li> : <></>}
					</ul>
				</div>
			) : <></>}
		</BasicPage>
	);
};

export default ClassPage;
