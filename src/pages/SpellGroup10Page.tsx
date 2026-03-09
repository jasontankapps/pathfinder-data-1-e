import spells from './subpages/_GEN_spell10';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup10Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup10Page;
