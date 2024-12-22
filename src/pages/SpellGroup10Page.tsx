import spells from './subpages/__spell10';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup10Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup10Page;
