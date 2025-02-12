import { ReactElement, useMemo } from 'react';
import { IonRippleEffect } from '@ionic/react';
import { SourceProp } from '../components/SourcesModal';
import Link from '../components/Link';
import data from '../json/_data_rule.json';
import { HierarchyArray } from '../types';
import BasicPage from './BasicPage';
import './BasicRulesPage.css';
import './Page.css';

type Data = typeof data;

type Name = keyof Data;

interface BasicRulesProps {
	hasJL?: boolean
	title: string
	sources: SourceProp[]
	jsx: ReactElement
	parent_topics?: Name[]
	subtopics?: Name[]
	siblings?: Name[]
	className?: string
	id: Name | "not_found"
}

interface HierarchyProps {
	extraHierarchy: HierarchyArray
}

const HierarchyRulesInset: React.FC<HierarchyProps> = ({extraHierarchy}) => {
	const h = [["All Rules", "main/rules"], ...extraHierarchy].map((pair, i) => (
		<span key={`rules-page-hierarchy-link-${i}`}>{i === 0 ? "" : " > "}<Link to={"/" + pair[1]}>{pair[0]}</Link></span>
	));
	return <div className="hierarchyRulesInset">{h}</div>;
};

const BasicRulesPage: React.FC<BasicRulesProps> = ({
	hasJL,
	title,
	sources,
	jsx,
	subtopics,
	className: cn,
	id,
	parent_topics,
	siblings
}) => {

	const [previous, next]: (string[] | null)[] = useMemo(() => {
		if(siblings && siblings.length > 1) {
			const pos = siblings.indexOf((id as Name));
			const pre = pos - 1;
			if(pos < 0) {
				return [null, null];
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
		return [null, null];
	}, [siblings]);
	const prevNextClass = "prevNext" + (next && !previous ? " nextOnly" : "");

	const subs: HierarchyArray = useMemo(
		() => subtopics ? subtopics.map(
			sub => [(data[sub] || {}).name || `ERROR fetching [${sub}.name]`, "/rule/" + sub]
		) : [],
	[subtopics]);

	const h: HierarchyArray = useMemo(() => {
		if(!parent_topics) {
			return [];
		}
		return parent_topics.map(prop => [data[prop].name, "rule/" + prop]) as HierarchyArray;
	}, [parent_topics]);

	return (
		<BasicPage title={title} sources={sources} pageId={`/rule/${id}`} hasJL={hasJL}>
			<HierarchyRulesInset extraHierarchy={h} />
			<div className={cn ? cn + " highlight" : "highlight"}>
				<h2>{title}</h2>
				{jsx}
			</div>
			{subs.length > 0 ?  (
				<div className="subtopics">
					<header>Subtopics:</header>
					<ul>
						{subs.map((sub, i) => (
							<li key={`subtopic/${i}/${sub[1]}`}><Link to={sub[1]}>{sub[0]}</Link></li>
						))}
					</ul>
				</div>
			) : <></>}
			{(next || previous) ? (
				<div className={prevNextClass}>
					{previous ?
						<div className="prev ion-activatable">
							<Link to={"/rule/" + previous[1]}>
								<div>Previous topic</div>
								<div>{previous[0]}</div>
								<IonRippleEffect />
							</Link>
						</div>
					: <></>}
					{next ?
						<div className="next ion-activatable">
							<Link to={"/rule/" + next[1]}>
								<div>Next topic</div>
								<div>{next[0]}</div>
								<IonRippleEffect />
							</Link>
						</div>
					: <></>}
				</div>
			) : <></>}
		</BasicPage>
	);
};

export default BasicRulesPage;
