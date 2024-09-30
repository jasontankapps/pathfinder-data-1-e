import Link from '../components/Link';
import { SourceProp } from '../components/SourcesModal';
import DisplayItem from '../components/DisplayItem';
import { HierarchyArray, Table } from '../types';
import BasicPage from './BasicPage';
import './BasicRulesPage.css';
import './Page.css';

const hierarchy: HierarchyArray = [
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
	className?: string
	pageId: string
}

interface HierarchyProps {
	extraHierarchy: HierarchyArray
}

const nulls = [null, null];

const HierarchyRulesInset: React.FC<HierarchyProps> = ({extraHierarchy}) => {
	const h = [...hierarchy, ...extraHierarchy].map((pair, i) => (
		<span key={`rules-page-hierarchy-link-${i}`}>{i === 0 ? "" : " > "}<Link to={"/" + pair[1]}>{pair[0]}</Link></span>
	));
	return <div className="hierarchyRulesInset">{h}</div>;
};

const BasicRulesPage: React.FC<BasicRulesProps> = ({
	title,
	sources,
	extraHierarchy,
	markdown,
	tables,
	subtopics,
	prevNext,
	className: cn,
	pageId
}) => {
	const [previous, next] = prevNext || nulls;

	const className = "prevNext" + (next && !previous ? " nextOnly" : "");

	return (
		<BasicPage title={title} sources={sources} pageId={pageId}>
			<HierarchyRulesInset extraHierarchy={extraHierarchy} />
			<DisplayItem markdown={["## " + title, "", ...markdown]} tables={tables} className={cn} />
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
