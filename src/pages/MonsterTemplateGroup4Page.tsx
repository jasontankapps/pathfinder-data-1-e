import templates from './subpages/__template4';
import MonsterTemplateGroupBasic from './MonsterTemplateGroupBasic';

const MonsterTemplateGroup4Page: React.FC<{id: string}> = ({id}) => <MonsterTemplateGroupBasic id={id} info={templates} />;

export default MonsterTemplateGroup4Page;
