import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SourceProp } from '../components/SourcesModal';
import DisplayItem from '../components/DisplayItem';
import rules from '../json/rules5.json';
import data from '../json/_data_rule.json';
import { HierarchyArray, Table } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

type Rules = typeof rules;

type Prop = keyof Rules;

type Data = typeof data;

type Name = keyof Data;

interface JsonRulesProps {
	name: string
	description: string[]
	parent_topics?: Name[]
	subtopics?: Name[]
	siblings?: Name[]
	sources: SourceProp[]
	tables?: Table[]
}

const hierarchy: HierarchyArray = [
	["Main", "main"],
	["All Rules", "rules"]
];


const RulesGroup5Page: React.FC<{id: string}> = ({id}) => {

	const { name: n, description: markdown, parent_topics, subtopics, siblings, sources = [], tables } = (rules[id as Prop]) as JsonRulesProps;

	const prevNext = useMemo(() => {
		if(siblings && siblings.length > 1) {
			const pos = siblings.indexOf((id as Name));
			const pre = pos - 1;
			if(pos < 0) {
				return false;
			} else if(pos === 0) {
				return [null, [data[siblings[1]].name, siblings[1]]];
			} else if (pos === siblings.length - 1) {
				return [[data[siblings[pre]].name, siblings[pre]], null];
			}
			const post = pos + 1;
			return [
				[data[siblings[pre]].name, siblings[pre]],
				[data[siblings[post]].name, siblings[post]]
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
							<li key={`${id}/${sub}`}><Link to={"/rule/" + sub}>{data[sub].name}</Link></li>
						))}
					</ul>
				</div>
			);
		}
		return <></>;
	}, [subtopics, id]);

	const h: HierarchyArray = useMemo(() => {
		if(!parent_topics) {
			return [...hierarchy];
		}
		return [...hierarchy, ...parent_topics.map(prop => [data[prop].name, "rule/" + prop])] as HierarchyArray;
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

export default RulesGroup5Page;
