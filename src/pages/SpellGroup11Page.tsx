import spells from './subpages/_GEN_spell11';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup11Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup11Page;
