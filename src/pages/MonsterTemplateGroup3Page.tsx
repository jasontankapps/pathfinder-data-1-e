import templates from './subpages/_GEN_template3';
import MonsterTemplateGroupBasic from './MonsterTemplateGroupBasic';

const MonsterTemplateGroup3Page: React.FC<{id: string}> = ({id}) => <MonsterTemplateGroupBasic id={id} info={templates} />;

export default MonsterTemplateGroup3Page;
