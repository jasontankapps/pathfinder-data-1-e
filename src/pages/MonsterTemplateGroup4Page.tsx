import templates from './subpages/_GEN_template4';
import MonsterTemplateGroupBasic from './MonsterTemplateGroupBasic';

const MonsterTemplateGroup4Page: React.FC<{id: string}> = ({id}) => <MonsterTemplateGroupBasic id={id} info={templates} />;

export default MonsterTemplateGroup4Page;
