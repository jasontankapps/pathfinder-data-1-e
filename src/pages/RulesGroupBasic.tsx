import data from '../json/_data_rule.json';
import { JsonRulesProps } from '../types';
import BasicRulesPage from './BasicRulesPage';
import './Page.css';

type Basic = {[x: string]: unknown};
interface RulesProps {
	id: keyof Basic
	rules: Basic
}

type Data = typeof data;

type Name = keyof Data;

const RulesGroupPage = ({id, rules}: RulesProps): any => {

	type Rules = typeof rules;

	type Prop = keyof Rules;

	const {
		hasJL,
		title,
		jsx,
		parent_topics,
		subtopics,
		siblings,
		sources = [],
		className
	} = (rules[id as Prop]) as JsonRulesProps<Name>;

	return (
		<BasicRulesPage
			hasJL={hasJL}
			id={id as Name}
			title={title}
			sources={sources}
			jsx={jsx}
			parent_topics={parent_topics}
			siblings={siblings}
			subtopics={subtopics}
			className={className}
		/>
	);
};

export default RulesGroupPage;
