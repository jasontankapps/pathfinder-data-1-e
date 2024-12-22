import spells from './subpages/__spell13';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup13Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup13Page;
