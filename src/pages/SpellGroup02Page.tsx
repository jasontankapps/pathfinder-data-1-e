import spells from './subpages/_GEN_spell2';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup2Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup2Page;
