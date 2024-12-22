import abilities from './subpages/__ability2';
import ClassAbilityGroupBasic from './ClassAbilityGroupBasic';

const ClassAbilityGroup2Page: React.FC<{id: string}> = ({id}) => <ClassAbilityGroupBasic id={id} info={abilities} />;

export default ClassAbilityGroup2Page;
