import templates from './subpages/__template1';
import MonsterTemplateGroupBasic from './MonsterTemplateGroupBasic';

const MonsterTemplateGroup1Page: React.FC<{id: string}> = ({id}) =>
	<MonsterTemplateGroupBasic id={id} info={templates} possiblyUnknown={true} />;

export default MonsterTemplateGroup1Page;
