import spells from './subpages/__spell12';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup12Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup12Page;
