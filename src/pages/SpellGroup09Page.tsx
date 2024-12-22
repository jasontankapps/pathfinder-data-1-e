import spells from './subpages/__spell9';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup9Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup9Page;
