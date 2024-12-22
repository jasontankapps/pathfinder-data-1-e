import spells from './subpages/__spell7';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup7Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup7Page;
