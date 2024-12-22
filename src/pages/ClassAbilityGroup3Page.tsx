import abilities from './subpages/__ability3';
import ClassAbilityGroupBasic from './ClassAbilityGroupBasic';

const ClassAbilityGroup3Page: React.FC<{id: string}> = ({id}) => <ClassAbilityGroupBasic id={id} info={abilities} />;

export default ClassAbilityGroup3Page;
