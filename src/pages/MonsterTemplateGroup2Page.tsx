import templates from './subpages/__template2';
import MonsterTemplateGroupBasic from './MonsterTemplateGroupBasic';

const MonsterTemplateGroup2Page: React.FC<{id: string}> = ({id}) => <MonsterTemplateGroupBasic id={id} info={templates} />;

export default MonsterTemplateGroup2Page;
