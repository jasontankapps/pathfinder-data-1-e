import spells from './subpages/__spell15';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup15Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup15Page;
