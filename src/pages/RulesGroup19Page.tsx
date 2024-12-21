import rules from './subpages/__rule19';
import data from '../json/_data_rule.json';
import { JsonRulesProps } from '../types';
import BasicRulesPage from './BasicRulesPage';
import './Page.css';

type Rules = typeof rules;

type Prop = keyof Rules;

type Data = typeof data;

type Name = keyof Data;

interface RulesProps {
	id: string
}
const RulesGroup19Page: React.FC<RulesProps> = ({id}) => {

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

export default RulesGroup19Page;
