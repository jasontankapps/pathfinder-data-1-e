import spells from './subpages/__spell4';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup4Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup4Page;
