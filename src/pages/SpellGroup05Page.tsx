import spells from './subpages/__spell5';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup5Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup5Page;
