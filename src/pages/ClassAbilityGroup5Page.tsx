import abilities from './subpages/_GEN_ability5';
import ClassAbilityGroupBasic from './ClassAbilityGroupBasic';

const ClassAbilityGroup5Page: React.FC<{id: string}> = ({id}) => <ClassAbilityGroupBasic id={id} info={abilities} />;

export default ClassAbilityGroup5Page;
