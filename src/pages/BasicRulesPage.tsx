import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SourceProp } from '../components/SourcesModal';
import DisplayItem from '../components/DisplayItem';
import { HierarchyArray, Table } from '../types';
import BasicPage from './BasicPage';
import './Page.css';

const hierarchy: HierarchyArray = [
	["Main", "main/main"],
	["All Rules", "main/rules"]
];

interface BasicRulesProps {
	title: string
	sources: SourceProp[]
	extraHierarchy: HierarchyArray
	markdown: string[]
	tables?: Table[]
	subtopics: HierarchyArray
	prevNext: (string[] | null)[] | false
}

const nulls = [null, null];

const BasicRulesPage: React.FC<BasicRulesProps> = ({
	title,
	sources,
	extraHierarchy,
	markdown,
	tables,
	subtopics,
	prevNext
}) => {
	const [previous, next] = prevNext || nulls;

	const h: HierarchyArray = useMemo(() => {
		if(!extraHierarchy) {
			return [...hierarchy];
		}
		return [...hierarchy, ...extraHierarchy];
	}, [extraHierarchy]);

	const className = "prevNext" + (next && !previous ? " nextOnly" : "");

	return (
		<BasicPage title={title} sources={sources} hierarchy={h}>
			<DisplayItem markdown={["## " + title, "", ...markdown]} tables={tables} />
			{subtopics.length > 0 ?  (
				<div className="subtopics">
					<header>Subtopics:</header>
					<ul>
						{subtopics.map((sub, i) => (
							<li key={`subtopic/${i}/${sub[1]}`}><Link to={sub[1]}>{sub[0]}</Link></li>
						))}
					</ul>
				</div>
			) : <></>}
			{prevNext ? (
				<div className={className}>
					{previous ?
						<div className="prev">
							<Link to={"/rule/" + previous[1]}>
								<div>Previous topic</div>
								<div>{previous[0]}</div>
							</Link>
						</div>
					: <></>}
					{next ?
						<div className="next">
							<Link to={"/rule/" + next[1]}>
								<div>Next topic</div>
								<div>{next[0]}</div>
							</Link>
						</div>
					: <></>}
				</div>
			) : <></>}
		</BasicPage>
	);
};

export default BasicRulesPage;
