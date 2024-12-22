import abilities from './subpages/__ability5';
import ClassAbilityGroupBasic from './ClassAbilityGroupBasic';

const ClassAbilityGroup5Page: React.FC<{id: string}> = ({id}) => <ClassAbilityGroupBasic id={id} info={abilities} />;

export default ClassAbilityGroup5Page;
