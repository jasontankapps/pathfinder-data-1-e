import spells from './subpages/__spell3';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup3Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup3Page;
