import { FC, ReactElement, useMemo } from 'react';
import { IonRippleEffect } from '@ionic/react';
import { SourceProp } from '../components/SourcesModal';
import Link from '../components/Link';
import getPageName from '../components/getPageName';
import data from '../json/_data_rule.json';
import { Hierarchy } from '../types';
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
	noFinder?: boolean
}

type HierarchyArray = Hierarchy[];

interface HierarchyProps {
	extraHierarchy: HierarchyArray
}

const HierarchyRulesInset: FC<HierarchyProps> = ({extraHierarchy}) => {
	const h = [["All Rules", "main/rules"], ...extraHierarchy].map((pair, i) => (
		<span key={`rules-page-hierarchy-link-${i}`}>{i === 0 ? "" : " > "}<Link to={"/" + pair[1]}>{pair[0]}</Link></span>
	));
	return <div className="hierarchyRulesInset">{h}</div>;
};

const getName = (input: string) => {
	return getPageName("/rule/" + input);
};

const BasicRulesPage: FC<BasicRulesProps> = ({
	hasJL,
	title,
	sources,
	jsx,
	subtopics,
	className: cn,
	id,
	parent_topics,
	siblings,
	noFinder
}) => {

	const [previous, next]: (string[] | null)[] = useMemo(() => {
		if(siblings && siblings.length > 1) {
			const pos = siblings.indexOf((id as Name));
			const pre = pos - 1;
			if(pos < 0) {
				return [null, null];
			} else if(pos === 0) {
				return [null, [getName(siblings[1]), siblings[1]]];
			} else if (pos === siblings.length - 1) {
				return [[getName(siblings[pre]), siblings[pre]], null];
			}
			const post = pos + 1;
			return [
				[getName(siblings[pre]), siblings[pre]],
				[getName(siblings[post]), siblings[post]]
			];
		}
		return [null, null];
	}, [siblings]);
	const prevNextClass = "prevNext" + (next && !previous ? " nextOnly" : "");

	const subs: HierarchyArray = useMemo(
		() => subtopics ? subtopics.map(
			sub => [getName(sub) || `ERROR fetching [${sub}.name]`, "/rule/" + sub]
		) : [],
	[subtopics]);

	const h: HierarchyArray = useMemo(() => {
		if(!parent_topics) {
			return [];
		}
		return parent_topics.map(prop => [getName(prop), "rule/" + prop]) as HierarchyArray;
	}, [parent_topics]);

	return (
		<BasicPage title={title} sources={sources} pageId={`/rule/${id}`} hasJL={hasJL} noFinder={noFinder}>
			<HierarchyRulesInset extraHierarchy={h} />
			<div className={cn}>
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
