import abilities from './subpages/__ability4';
import ClassAbilityGroupBasic from './ClassAbilityGroupBasic';

const ClassAbilityGroup4Page: React.FC<{id: string}> = ({id}) => <ClassAbilityGroupBasic id={id} info={abilities} />;

export default ClassAbilityGroup4Page;
