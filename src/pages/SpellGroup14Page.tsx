import spells from './subpages/_GEN_spell14';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup14Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup14Page;
