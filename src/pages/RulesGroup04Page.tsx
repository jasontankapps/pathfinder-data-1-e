import rules from './subpages/__rule4';
import data from '../json/_data_rule.json';
import { JsonRulesProps2 } from '../types';
import BasicRulesPage from './BasicRulesPage';
import './Page.css';

type Rules = typeof rules;

type Prop = keyof Rules;

type Data = typeof data;

type Name = keyof Data;

interface RulesProps {
	id: string
}
const RulesGroup4Page: React.FC<RulesProps> = ({id}) => {

	const {
		title,
		jsx,
		parent_topics,
		subtopics,
		siblings,
		sources = [],
		className
	} = (rules[id as Prop]) as JsonRulesProps2<Name>;

	return (
		<BasicRulesPage
			id={id as Prop}
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

export default RulesGroup4Page;
