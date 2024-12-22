import spells from './subpages/__spell16';
import SpellGroupBasic from './SpellGroupBasic';

const SpellGroup16Page: React.FC<{id: string}> = ({id}) => <SpellGroupBasic id={id} info={spells} />;

export default SpellGroup16Page;
