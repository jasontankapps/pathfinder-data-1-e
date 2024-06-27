import { useMemo } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DisplayItem from '../components/DisplayItem';
import { SourceProp } from '../components/SourcesModal';
import rules1 from '../json/rules.json';
import rules2 from '../json/rules2.json';
import rules3 from '../json/rules3.json';
import rules4 from '../json/rules4.json';
import { HierarchyArray, Table } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const rules = {...rules1, ...rules2, ...rules3, ...rules4};

type RulesType = typeof rules;

type Prop = keyof RulesType;

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

const MainPage: React.FC = () => {

	const { id } = useParams<{ id?: Prop; }>();

	const { name: n, description: markdown, parent_topics, subtopics, siblings, sources = [], tables } = (rules[id || "not_found"] || rules.not_found) as JsonDataPropsRules;

	const prevNext = useMemo(() => {
		if(siblings && siblings.length > 1) {
			const pos = siblings.indexOf(id || "not_found");
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

export default MainPage;
