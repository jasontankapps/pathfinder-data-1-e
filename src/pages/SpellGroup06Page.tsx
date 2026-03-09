import spells from './subpages/_GEN_spell6';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup6Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup6Page;
