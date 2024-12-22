import abilities from './subpages/__ability1';
import ClassAbilityGroupBasic from './ClassAbilityGroupBasic';

const ClassAbilityGroup1Page: React.FC<{id: string}> = ({id}) =>
	<ClassAbilityGroupBasic id={id} info={abilities} possiblyUnknown={true} />;

export default ClassAbilityGroup1Page;
