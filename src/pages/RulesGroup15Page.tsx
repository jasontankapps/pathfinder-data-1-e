import { useMemo } from 'react';
import rules from '../json/rules15.json';
import data from '../json/_data_rule.json';
import { HierarchyArray, JsonRulesProps } from '../types';
import BasicRulesPage from './BasicRulesPage';
import './Page.css';

type Rules = typeof rules;

type Prop = keyof Rules;

type Data = typeof data;

type Name = keyof Data;

const RulesGroup15Page: React.FC<{id: string}> = ({id}) => {

	const {
		name: n,
		description: markdown,
		parent_topics,
		subtopics,
		siblings,
		sources = [],
		tables,
		className
	} = (rules[id as Prop]) as JsonRulesProps<Name>;

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
	}, [siblings]);

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
		<BasicRulesPage
			title={n}
			sources={sources}
			extraHierarchy={h}
			markdown={markdown}
			tables={tables}
			subtopics={subs}
			prevNext={prevNext}
			className={className}
		/>
	);
};

export default RulesGroup15Page;
