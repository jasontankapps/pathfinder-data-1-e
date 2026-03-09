import spells from './subpages/_GEN_spell8';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup8Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup8Page;
