import abilities from './subpages/__ability6';
import ClassAbilityGroupBasic from './ClassAbilityGroupBasic';

const ClassAbilityGroup6Page: React.FC<{id: string}> = ({id}) => <ClassAbilityGroupBasic id={id} info={abilities} />;

export default ClassAbilityGroup6Page;
