import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SourceProp } from '../components/SourcesModal';
import DisplayItem from '../components/DisplayItem';
import rules from '../json/rules8.json';
import { HierarchyArray, Table } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

type Data = typeof rules;

type Prop = keyof Data;

interface JsonDataPropsRules {
	name: string
	description: string[]
	parent_topics?: Prop[]
	subtopics?: Prop[]
	siblings?: Prop[]
	sources: SourceProp[]
	tables?: Table[]
}

const hierarchy: HierarchyArray = [
	["Main", "main"],
	["All Rules", "rules"]
];


const RulesGroup1Page: React.FC<{id: string}> = ({id}) => {

	const { name: n, description: markdown, parent_topics, subtopics, siblings, sources = [], tables } = (rules[id as Prop]) as JsonDataPropsRules;

	const prevNext = useMemo(() => {
		if(siblings && siblings.length > 1) {
			const pos = siblings.indexOf((id as Prop));
			if(pos < 0) {
				return false;
			} else if(pos === 0) {
				return [null, [rules[siblings[1]].name, siblings[1]]];
			} else if (pos === siblings.length - 1) {
				return [[rules[siblings[pos - 1]].name, siblings[pos - 1]], null];
			}
			return [
				[rules[siblings[pos - 1]].name, siblings[pos - 1]],
				[rules[siblings[pos + 1]].name, siblings[pos + 1]]
			];
		}
		return false;
	}, [siblings, id]);

	const subs = useMemo(() => {
		if(subtopics) {
			return (
				<div className="subtopics">
					<header>Subtopics:</header>
					<ul>
						{subtopics.map(sub => (
							<li key={`${id}/${sub}`}><Link to={"/rule/" + sub}>{rules[sub].name}</Link></li>
						))}
					</ul>
				</div>
			);
		}
		return <></>;
	}, []);

	const h: HierarchyArray = useMemo(() => {
		if(!parent_topics) {
			return [...hierarchy];
		}
		return [...hierarchy, ...parent_topics.map(prop => [rules[prop].name, "rule/" + prop])] as HierarchyArray;
	}, [parent_topics]);

	return (
		<BasicPage title={n} sources={sources} hierarchy={h}>
			<DisplayItem markdown={["## " + n, "", ...markdown]} tables={tables} />
			{subs}
			{prevNext ? (
				<div className="prevNext">
					{prevNext[0] ?
						<Link to={"/rule/" + prevNext[0][1]}>
							<div className="prev">
								<div>Previous topic</div>
								<div>{prevNext[0][0]}</div>
							</div>
						</Link>
					: <></>}
					{prevNext[1] ?
						<Link to={"/rule/" + prevNext[1][1]}>
							<div className="next">
								<div>Next topic</div>
								<div>{prevNext[1][0]}</div>
							</div>
						</Link>
					: <></>}
				</div>
			) : <></>}
		</BasicPage>
	);
};

export default RulesGroup1Page;
